//Components/EcoForm.js

import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'


class EcoForm extends React.Component {
    render() {

        const onSubmit = (e) => {
            console.log("ICI")
        }
        
        return (
          <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16 }}>
          EcoForm
        </Text>
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
      //width: 10
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
      fontSize: 12,
      color: '#444444',
      textAlign: 'right',
      margin: 5,
    }
  })

export default EcoForm