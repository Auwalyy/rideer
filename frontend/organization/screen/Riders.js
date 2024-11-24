import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManageRiders from '../RiderManagement/ManageRiders'
import AddRiders from '../RiderManagement/AddRider'

const Stack = createNativeStackNavigator();

const Riders = () => {
  return (
      <Stack.Navigator initialRouteName='AddRiders'>
         <Stack.Screen
          name="AddRiders"
          component={AddRiders}
         />
        <Stack.Screen
          name="ManageRiders"
          component={ManageRiders}
         />
      </Stack.Navigator>
  );
};

export default Riders;
