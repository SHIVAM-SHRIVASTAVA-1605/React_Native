import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import AuthProvider from './context/authContext';

import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import HomeScreen from './Screens/HomeScreen';

const Stack = createStackNavigator();

function AuthenticatedNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function UnAuthenticatedNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  const isAuthenticated = false;
  return (
    <AuthProvider>
      <NavigationContainer>
        {isAuthenticated ? (
          <AuthenticatedNavigator />
        ) : (
          <UnAuthenticatedNavigator />
        )}
      </NavigationContainer>
    </AuthProvider>
  );
}
