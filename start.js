import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import React from 'react';



const Start = ({navigation}) => {
  return (
  
      <View style={styles.container}> 
      <Text style={{fontSize: 28, fontFamily: "Sans-serif",
       marginBottom: 10,color: "white"}}>Welcome to</Text>
      <Text style={{ fontSize: 28, fontFamily: "Sans-serif", color: "#1572A1"}}>Quizdom</Text> 
      <TouchableOpacity 
      onPress={() => navigation.navigate("About")} 
      style={{height:40, width:100, borderRadius: 12, backgroundColor: "#1572A1",justifyContent:'center', alignItems: 'center', marginTop: 20}}> 
      <Text style={{color: "white", fontSize: 12}}>Start</Text>
      </TouchableOpacity>
      </View>
   
);
};

                  {/* Conditional rendering for IOS, Android and PC */}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center', alignItems: 'center',
    backgroundColor: "#9AD0EC",
    ...Platform.select({
      default: {
        backgroundColor: '#9AD0EC',
        justifyContent: 'center', alignItems: 'center',
      },
      ios: {
        backgroundColor: 'blue'
      },
      android: {  
       backgroundColor: 'yellow'
      },
      
    })
  }
});
    


export default Start;

