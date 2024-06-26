import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Popupscreen from './src/screens/Popupscreen';
import Lgscreen from './src/screens/Lgscreen';
import Appnavigation from './navigations/Appnavigation';
import 'react-native-gesture-handler';
import Loginscreen from './src/screens/Loginscreen';
import Signupscreen from './src/screens/Signupscreen';
import { nodeModuleNameResolver } from 'typescript';
import Dashboard from './src/screens/Dashboard';
import Detail from './src/screens/Detail';
import Payment from './src/screens/Payment';
import Orders from './src/screens/Orders';
import Profile from './src/screens/Profile';
import EnterEmailScreen from './src/screens/EnterEmailScreen';
import EnterOTPScreen from './src/screens/EnterOTPScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';

function App() {
  return (
    

  <View style={sty.container}>
    <Appnavigation/>
    {/* <Popupscreen/> */}
    {/* <Lgscreen/> */}
    {/* <Loginscreen/> */}
    {/* <Signupscreen/> */}
    {/* <Dashboard/> */}
    {/* <Detail/> */}
     {/* <Payment/> */}
    {/* <Orders/> */}
    {/* <Profile/> */}
    {/* {<EnterEmailScreen>} */}
   {/* {<EnterOTPScreen>} */}
   {/* {<ResetPasswordScreen>} */}

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