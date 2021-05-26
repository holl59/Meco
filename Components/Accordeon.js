// Components/Accordeon.js

import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion'
import ActionButton from '@logvinme/react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'
import moment from 'moment'
import 'moment/min/moment-with-locales'

import ecos from '../Helpers/ecosData'
import EcoItem from './EcoItem'
import { connect } from 'react-redux'


class Accordeon extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ecoList: [],
      activeSections: [0]
    }

  }

    _loadEcos() {
      console.log("create Eco")
      console.log(this.props.ecoList)
      const action = { type: "LST_ECO", data: ecos }
      this.props.dispatch(action)
    }
    _displayEcoDetail = (eco) => {
      console.log("Détail de Eco id="+eco.id)
      this.props.navigation.navigate("EcoDetail", {eco:eco})
    }

    _renderHeader = section => {
      return (
        <View style={styles.header}>
          <Text style={styles.headerText}>{section.content}</Text>
        </View>
      );
    };
  
    _renderContent = section => {
      return (
        <View style={styles.content}>
          <FlatList
              data={section.data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => <EcoItem eco={item} displayEcoDetail={this._displayEcoDetail} />}
          />
        </View>
      );
    };
  
    _updateSections = activeSections => {
      this.setState({ activeSections });
    };
  
  render() {
    moment.locale('fr')
    const StartMonth = moment().format("YYYY-MM")
    console.log(StartMonth.format('MMM'))
    const StartMonth_1 = moment().subtract(1, 'months').format("YYYY-MM")
    const EndMonth_1 = moment(StartMonth).subtract(1,'seconds')
    const EndMonth_2 = moment(StartMonth_1).subtract(1,'seconds')
    console.log(EndMonth_1)
    //console.log(moment(DebMonth_1).isBefore('2021-05-13T00:00:00'))
    //console.log(this.props.ecoList)

    const SECTIONS = [
      {
        title: 'Section 1' ,
        content: moment().format('MMMM YYYY'),
        data: this.props.ecoList.filter(item => moment(EndMonth_1).isBefore(item.dateOpe) )
      },
      {
        title: 'Section 2',
        content: moment().subtract(1, 'months').format('MMMM YYYY'),
        data: this.props.ecoList.filter(item => (moment(EndMonth_2).isBefore(item.dateOpe) && moment(StartMonth).isAfter(item.dateOpe)) )
      },
    ];

      return (
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Accordion
          sections={SECTIONS}
          activeSections={this.state.activeSections}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
          />
          <ActionButton 
            buttonColor="rgba(231,76,60,1)"
            onPress={() => {this._loadEcos()} }
          />
        </View>
      )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 24,
    //marginLeft: 20, 
    backgroundColor: '#fff',
    //alignContent: 'center',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  content: {
  },
  header: {
      alignItems: 'center',
      backgroundColor: 'lightblue'
  },
  headerText: {
      fontSize: 20,

  }
})

const mapStateToProps = (state) => {
  return {
    ecoList: state.manageEco.ecoList
  }
}

export default connect(mapStateToProps)(Accordeon)
