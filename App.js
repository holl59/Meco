import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ActionButton from '@logvinme/react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'
import Accordeon from './Components/Accordeon'


// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <StatusBar style="auto" />
//         <Accordeon/>
//         <ActionButton 
//           buttonColor="rgba(231,76,60,1)"
//           onPress={() => {console.log("create Eco") }}
//         />
//       </View>
//     );
//   }
// }

function HomeScreen() {
  return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Accordeon/>
        <ActionButton 
          buttonColor="rgba(231,76,60,1)"
          onPress={() => {console.log("create Eco") }}
        />
      </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Méco" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 24,
    //marginLeft: 20, 
    backgroundColor: '#fff',
    //alignContent: 'center',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
