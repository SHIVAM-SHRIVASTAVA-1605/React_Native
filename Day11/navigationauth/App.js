import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import AuthenticatedNavigator from './CustomNavigator/AuthenticatedNavigator';
import UnAuthenticatedNavigator from './CustomNavigator/UnAuthenticatedNavigator';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  async function getUser() {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem("token");
      if(token) {
        setIsUserLoggedIn(true);
      }
    } catch (error) {
      console.log("Error occured while checking user");
    } finally{
      setLoading(false);
    }
  }
  useEffect(() => { 
  getUser();
    },[] );

    if(loading) {
      return <View style={styles.loadingContainer}>
      <Text>Loading...</Text>
    </View>
    }
  return (
    <NavigationContainer>
        {isUserLoggedIn ? (<AuthenticatedNavigator 
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
        getUser = {getUser}
      />) : 
      (<UnAuthenticatedNavigator 
          isUserLoggedIn={isUserLoggedIn}
          setIsUserLoggedIn={setIsUserLoggedIn}
          getUser = {getUser}
      />
    )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});