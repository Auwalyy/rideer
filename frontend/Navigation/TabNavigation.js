import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

const TabNavigation = () => {

    const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
        <Tab.Screen></Tab.Screen>
    </NavigationContainer>
  )
}

export default TabNavigation