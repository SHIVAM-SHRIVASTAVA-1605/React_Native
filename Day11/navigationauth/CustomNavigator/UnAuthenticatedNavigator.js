import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import RegisterScreen from '../Screens/RegisterScreen';
import LoginScreen from '../Screens/LoginScreen';

const UnAuthenticatedNavigator = ({isUserLoggedIn, setIsUserLoggedIn, getUser}) => {
    const Stack = createStackNavigator();
    // Login

    // Register
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name="Register" 
            component={RegisterScreen} 
            initialParams={{ setIsUserLoggedIn, isUserLoggedIn, getUser}}
        />
        <Stack.Screen 
            name="Login" 
            component={LoginScreen}
            initialParams={{ setIsUserLoggedIn, isUserLoggedIn, getUser }}
        />
    </Stack.Navigator>
  )
}

export default UnAuthenticatedNavigator

const styles = StyleSheet.create({})