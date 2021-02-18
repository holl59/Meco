//Components/EcoDetail.js

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import moment from 'moment'
import { color } from 'react-native-reanimated'

class EcoDetail extends React.Component  {
  render() {
    moment.locale('fr')
    const {eco}=this.props.route.params
    let difficultes = [
      {color:'red', label:'difficile'},
      {color:'green', label:'facile'},
      {color:'orange', label:'moyennement difficile'}
    ]

    return (
        <View style={styles.main_container}>
            <View style={styles.content_container}>
              <Text style={[styles.difficulte_text,{color:eco.difficulte}]}>{ difficultes.find(diff => diff.color === eco.difficulte).label}</Text>
              <Text style={styles.description_text} numberOfLines={2}>{eco.description}</Text>
              <Text style={styles.montant_text}>{eco.montant + ' \u20AC'} </Text>
              <Text style={styles.date_text}>{moment(eco.dateOpe).format("DD MMM YYYY")} </Text>
              <Text style={styles.comment_text}>{eco.comment}</Text>
              <Text style={styles.categorie_text}>{eco.categorie}</Text>
            </View>
        </View>
    )
  }
}

export default EcoDetail

const styles = StyleSheet.create({
    main_container: {
      height: 40,
      justifyContent: 'flex-start',
      },
    content_container: {
      fontSize: 28,
      flexDirection: 'column',
      alignItems: 'flex-start',
      margin: 5,
    },
    difficulte_text: {
      fontSize: 20,
      margin: 5,
    },
    description_text: {
      //flex: 1,
      //color: '#666666',
      margin: 5,
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
    },
    comment_text: {
      margin: 5,
    },
    categorie_text: {
      margin: 5,
    },
  })

