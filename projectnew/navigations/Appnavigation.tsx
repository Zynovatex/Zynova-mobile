import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Popupscreen from '../src/screens/Popupscreen';
import Lgscreen from '../src/screens/Lgscreen';
import Loginscreen from '../src/screens/Loginscreen';
import Signupscreen from '../src/screens/Signupscreen';


const Stack = createStackNavigator();

const Appnavigation = () => {
  return (
   <NavigationContainer>
 <Stack.Navigator screenOptions={{
    headerShown:false,
 }
 }>
      <Stack.Screen name="A" component={Popupscreen} options={{
        cardStyleInterpolator:CardStyleInterpolators.forFadeFromCenter
      }}/>
      <Stack.Screen name="B" component={Lgscreen} options={{
        cardStyleInterpolator:CardStyleInterpolators.forFadeFromCenter
      }}/>
      <Stack.Screen name="C" component={Loginscreen}/>
      <Stack.Screen name='D' component={Signupscreen} />
     
     
    </Stack.Navigator>

   </NavigationContainer>


  )
}

export default Appnavigation