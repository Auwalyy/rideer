import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import TabNavigation from "./Navigation/TabNavigation";
import Dashboard from "./screens/OrganizationDashboard";
import Riders from "./screens/Riders";
import Orders from "./screens/Orders";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen
          name="OrganizationDashborad"
          component={Dashboard}
          options={{
            headerLeft: () => <></>,
            headerShown: false,
          }}
        />
        <Stack.Screen name="Riders" component={Riders} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="Requests" component={Orders} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
