import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Popupscreen from './src/screens/Popupscreen';
import Lgscreen from './src/screens/Lgscreen';
import Appnavigation from './navigations/Appnavigation';
import 'react-native-gesture-handler';
import Loginscreen from './src/screens/Loginscreen';
import Signupscreen from './src/screens/Signupscreen';


function App() {
  return (
    

  <View style={sty.container}>
    <Appnavigation/>
    {/* <Popupscreen/> */}
    {/* <Lgscreen/> */}
    {/* <Loginscreen/> */}
    {/* <Signupscreen/> */}
    

  </View>


    
  )
}
const sty=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  }
})

export default App