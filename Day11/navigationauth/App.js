import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import AuthenticatedNavigator from './CustomNavigator/AuthenticatedNavigator';
import UnAuthenticatedNavigator from './CustomNavigator/UnAuthenticatedNavigator';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, UserContextProvider } from './context/userContext';
import { UserContext } from './context/userContext';

export default function App() {
  const { isUserLoggedIn, setIsUserLoggedIn, loading, setLoading, getUser} =
    useContext(UserContext);
    useEffect(() => {
      if(getUser) {
        getUser();
      }
    }, []);

    if(loading) {
      return 
      <Text>Loading...</Text>
    }
  return (
    <NavigationContainer>
        {isUserLoggedIn ? (<AuthenticatedNavigator 
      />) : 
      (<UnAuthenticatedNavigator 
      />
    )}
    </NavigationContainer>
    </UserContextProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});