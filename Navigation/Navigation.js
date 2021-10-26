// Navigation/Navigation.js

import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Accordeon from '../Components/Accordeon'
import EcoDetail from '../Components/EcoDetail'
import EcoForm from '../Components/EcoForm'
import SignIn from '../Screens/SignIn'
import SignUp from '../Screens/SignUp'

const AppStack = createStackNavigator()
const isLoggedIn  = false

class Navigation extends React.Component {
    render() {
        return (
        <NavigationContainer>
            <AppStack.Navigator
                initialRouteName="SignUp"
                screenOptions={{ gestureEnabled: false }}
            >
               { isLoggedIn == true ? (
                <>
                    <AppStack.Screen 
                        name="Accueil"
                        component={Accordeon}
                        options={{ title: 'Accueil' }}
                    />

                    <AppStack.Screen 
                        name="EcoDetail"
                        component={EcoDetail}
                        options={{ title: 'Détail de l Eco' }}
                    />

                    <AppStack.Screen 
                        name="EcoForm"
                        component={EcoForm}
                        options={{ title: 'Ajouter un Eco' }}
                    />
                </>
              ) : (
                <>
                    <AppStack.Screen
                        name="SignIn"
                        component={SignIn}
                        options={{ title: 'Se connecter'}}
                    />
                    <AppStack.Screen
                        name="SignUp"
                        component={SignUp}
                        options={{ title: "S'enregistrer"}}
                    />
                </>
              ) }
            </AppStack.Navigator>
        </NavigationContainer>
        )
    }
}

export default Navigation