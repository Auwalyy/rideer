import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Orders from '../screens/Orders';
import Icon from 'react-native-vector-icons/Ionicons'; 

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name='Home' 
        component={Home} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} /> 
          ),
        }}
      />
 
      <Tab.Screen 
        name="Orders" 
        component={Orders} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="cart" size={size} color={color} /> 
          ),
        }}
      />
      <Tab.Screen 
        name='Profile' 
        component={Profile} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" size={size} color={color} /> 
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
