import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import MyNavigation from "./src/Navigation";




const App = ()=> {
  return (
    
    <NavigationContainer>
    <MyNavigation/>
    </NavigationContainer>

   
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
   flex: 1,
    backgroundColor: "#9AD0EC",
    
  },
});
