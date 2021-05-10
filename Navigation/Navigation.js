// Navigation/Navigation.js

import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Accordeon from '../Components/Accordeon'
import EcoDetail from '../Components/EcoDetail'
import SignIn from '../Components/SignIn'

const AppStack = createStackNavigator()
const isLoggedIn  = false

class Navigation extends React.Component {
    render() {
        return (
        <NavigationContainer>
            <AppStack.Navigator
                initialRouteName="Accueil"
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
                </>
              ) : (
                <>
                    <AppStack.Screen
                        name="SignIn"
                        component={SignIn}
                        options={{ title: 'Se connecter'}}
                    />
                </>
              ) }
            </AppStack.Navigator>
        </NavigationContainer>
        )
    }
}

export default Navigation