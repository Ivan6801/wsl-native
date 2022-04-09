import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import NewPostScreen from "../screens/NewPostScreen";
import TraductorScree from "../screens/Traductor";

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="NewPost"
          options={{ headerShown: false }}
          component={NewPostScreen}
        />
        <Stack.Screen
          name="Profile"
          options={{ title: "Perfil" }}
          component={ProfileScreen}
        />
        <Stack.Screen name="Traductor" component={TraductorScree} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
