import { View, Text, TouchableOpacity, Platform } from 'react-native';
import React from 'react';
import { isSearchBarAvailableForCurrentPlatform } from 'react-native-screens';


const About = ({navigation}) => {
  return (
    <View style={{backgroundColor: "#9AD0EC", flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 28, fontFamily: "Sans-serif",
       marginBottom: 5,color: "white"}}>Welcome to</Text>
      <Text style={{fontSize: 28, fontFamily: "Sans-serif", color: "#1572A1", marginBottom: 40}}>Quizdom</Text>

      <View style={{width: 600, height: 200,backgroundColor: "#87CEEB", borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 20, fontFamily: "Sans-serif", color: "white", marginBottom: 10}}>Who are we?</Text>
      <Text style={{fontSize: 15, fontFamily: "Sans-serif", color: "white",marginLeft: 20, margin: 2}}>This is a simple football quiz game.</Text>
      <Text style={{fontSize: 15, fontFamily: "Sans-serif", color: "white", margin: 2}}>We will present ten questions with alternative answers.</Text>
      <Text style={{fontSize: 15, fontFamily: "Sans-serif", color: "white", margin: 2}}>Let's test you're football knowledge!</Text>
      
      
      <TouchableOpacity 
      onPress={() => navigation.navigate("Game")} 
      style={{height:40, width:90, borderRadius: 12, backgroundColor: "#1572A1",
      justifyContent:'center', alignItems: 'center', marginTop: 20}}> 
      <Text style={{color: "white", fontSize: 15}}>Play</Text>
      </TouchableOpacity>
      <Text> {Platform.OS === "Android" ? console.log("Android") : console.log("Undefined")}</Text>
      {Platform.isTV ? console.log(true) : console.log(false)}
      </View>
      </View>
  );
};

export default About;
