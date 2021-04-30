// Navigation/Navigation.js

import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Accordeon from '../Components/Accordeon'
import EcoDetail from '../Components/EcoDetail'
import Login from '../Components/Login'

const AppStack = createStackNavigator()
const isLogin  = false

class Navigation extends React.Component {
    render() {
        return (
        <NavigationContainer>
            <AppStack.Navigator
                initialRouteName="Home"
                screenOptions={{ gestureEnabled: false }}
            >
               { isLogin == true ? (
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
                        name="Login"
                        Component={Login}
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