// Components/Search.js

import React from 'react'
import { StyleSheet, View, Button, TextInput, FlatList, Text } from 'react-native'
//import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi' // import { } from ... car c'est un export nommé dans TMDBApi.js

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.searchText = ""
        this.state = { films: [] }
      }
    
    _loadFilms() {
        if (this.searchText.length > 0) {
            getFilmsFromApiWithSearchedText(this.searchText).then(data => {
                this.setState({ films: data.results })
            })
        }
    }

    _searchTextInputChanged(text) {
        this.searchText = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
    }

    render() {
        console.log("RENDER")
        return (
            <View style={styles.main_container}>
                <TextInput  style={styles.textinput} placeholder='Titre du film'
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                />
                <Button style={{ height: 50}} title='Recherche' onPress={() => this._loadFilms()} />
                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: { 
        marginTop: 20, 
        flex: 1 
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
      }
})

export default Search
