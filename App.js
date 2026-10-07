
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import RecipeListScreen from "./src/screens/RecipeListScreen";
import RecipeDetailsScreen from "./src/screens/RecipeDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >

        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        {/* Recipe List Screen */}
        <Stack.Screen
          name="RecipeList"
          component={RecipeListScreen}
        />

        {/* Recipe Details Screen */}
        <Stack.Screen
          name="RecipeDetails"
          component={RecipeDetailsScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
