//Components/Login.js

import React from 'react'
import {  View, TextInput, Button, Alert } from 'react-native'

//const AuthContext = React.createContext();

const {username, setUsername} = ''
const {password, setPassword} = ''

//const { signIn } = React.useContext(AuthContext);

class Login extends React.Component {
    render () {
        return (
        <View>
            <TextInput
            placeholder="Nom Utilisateur"
            value={username}
            onChangeText={setUsername}
            />
            <TextInput
            placeholder="Mot de Passe"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            />
            <Button title="Se connecter" onPress={() => Alert.alert('Se Connecter')} />
        </View>
        )
    }
}

export default Login
