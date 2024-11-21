import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';  
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Signup, Welcome } from './screens/index.js';
import TabNavigation from './Navigation/TabNavigation.js';

const App = () => {
   
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
        <TabNavigation />
    </NavigationContainer>
  )
}

export default App


const styles = StyleSheet.create({})
