import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './start';
import quizGame from './quizGame';
import About from "./about";





const Stack = createNativeStackNavigator();

function MyNavigation({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" options={{headerShown: false}} component={Start}/>
      <Stack.Screen name="Game" options={{headerShown: false}} component={quizGame}/>
      <Stack.Screen name="About" options={{headerShown: false}} component={About}/>
    </Stack.Navigator>
  );
};

export default MyNavigation;