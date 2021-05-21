// Components/EcoList.js

import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import EcoItem from './EcoItem'
import { connect } from 'react-redux'

class EcoList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ecoList: []
    }
  }

  _displayDetailForFilm = (idFilm) => {
    console.log("Display film " + idFilm)
    // On a récupéré les informations de la navigation, on peut afficher le détail du film
    this.props.navigation.navigate('FilmDetail', {idFilm: idFilm})
  }

  render() {
    return (
        <FlatList
          style={styles.list}
          data={this.props.ecoList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <EcoItem
              eco={item}
              displayDetailForFilm={this._displayDetailForFilm}
            />
          )}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (!this.props.favoriteList && this.props.page < this.props.totalPages) {
              // On appelle la méthode loadFilm du component Search pour charger plus de films
              this.props.loadFilms()
            }
          }}
        />
    )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
})

const mapStateToProps = state => {
  return {
    ecoList: state.manageEco.ecoList
  }
}

export default connect(mapStateToProps)(EcoList)