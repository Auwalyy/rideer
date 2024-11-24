import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screen/HomeScreen';
import Riders from '../screen/Riders';
import Transactions from '../screen/Transactions';
import ProfileScreen from '../screen/ProfileScreen';
 
const TabNav = () => {

 const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Riders"
        component={Riders}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="bicycle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={Transactions}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="wallet" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
