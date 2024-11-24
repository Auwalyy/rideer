import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Orders from '../screens/Orders';
import Icon from 'react-native-vector-icons/Ionicons'; // You can use other icon sets like FontAwesome

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name='Home' 
        component={Home} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} /> // Add the icon for Home
          ),
        }}
      />
 
      <Tab.Screen 
        name="Orders" 
        component={Orders} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="cart" size={size} color={color} /> // Add the icon for Orders
          ),
        }}
      />
      <Tab.Screen 
        name='Profile' 
        component={Profile} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" size={size} color={color} /> // Add the icon for Profile
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
