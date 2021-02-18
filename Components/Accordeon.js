// Components/Accordeon.js

import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion'
import ActionButton from '@logvinme/react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'
import moment from 'moment'
import ecos from '../Helpers/ecosData'
import EcoItem from './EcoItem'

const SECTIONS = [
    {
      title: 'Section 1' ,
      content: moment().format('MMMM YYYY'),
      data: ecos
    },
    {
      title: 'Section 2',
      content: moment().subtract(1, 'months').format('MMMM YYYY'),
      data: [
        {
           id:3,
           difficulte:"orange",
           description:"Gateau du dimanche",
           montant:10.0,
           comment:"En faisant notre propre gateau",
           categorie:"Alimentation",
           dateOpe:"2020-11-29T00:00:00"
        }
    ]
    },
  ];


class Accordeon extends React.Component {

  state = {
      activeSections: [0],
    };
  
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
            onPress={() => {console.log("create Eco") }}
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

export default Accordeon
