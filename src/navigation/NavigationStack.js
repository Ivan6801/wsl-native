import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import NewPostScreen from "../screens/NewPostScreen";
import TraductorScree from "../screens/Traductor";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

export default function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="NewPost"
          component={NewPostScreen}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />
        <Stack.Screen 
          name="Traductor" 
          component={TraductorScree} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
        />
        <Stack.Screen 
          name="Signup" 
          component={SignupScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
