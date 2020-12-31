//Components/EcoItem.js

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
// import Moment from 'react-moment'
import moment from 'moment'

class EcoItem extends React.Component {
    render() {
        const eco=this.props.eco
        moment.locale('en')
        return (
            <View style={styles.main_container}>
                <View style={styles.content_container}>
                  <Text style={[styles.difficulte_text,{color:eco.difficulte}]}>{'\u2022 '}</Text>
                  <Text style={styles.description_text} numberOfLines={2}>{eco.description}</Text>
                  <Text style={styles.montant_text}>{eco.montant + ' \u20AC'} </Text>
                  <Text style={styles.date_text}>{moment(eco.dateOpe).format("DD MMM")} </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
      height: 40,
      justifyContent: 'flex-start',
      },
    content_container: {
      fontSize: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    difficulte_text: {
      fontSize: 28,
      width: 10
    },
    description_text: {
      flex: 1,
      color: '#666666',
      margin: 10,
    },
    montant_text: {
      fontWeight: 'bold',
      flexWrap: 'wrap',
      paddingRight: 5,
      margin: 5,
    },
    date_text: {
      // fontSize: 18,
      color: '#444444',
      textAlign: 'right',
      margin: 5,
    }
  })

export default EcoItem