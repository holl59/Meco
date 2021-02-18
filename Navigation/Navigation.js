// Navigation/Navigation.js

import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Accordeon from '../Components/Accordeon'
import EcoDetail from '../Components/EcoDetail'

const Stack = createStackNavigator()

class Navigation extends React.Component {
    render() {
        return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{ gestureEnabled: false }}
            >
                <Stack.Screen 
                    name="Accueil"
                    component={Accordeon}
                    options={{ title: 'Accueil' }}
                />

                <Stack.Screen 
                    name="EcoDetail"
                    component={EcoDetail}
                    options={{ title: 'Détail de l Eco' }}
                />

            </Stack.Navigator>
        </NavigationContainer>
        )
    }
}

export default Navigation