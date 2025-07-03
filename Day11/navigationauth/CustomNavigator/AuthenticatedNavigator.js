import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CategoryScreen from '../Screens/CategoryScreen';
import DishesScreen from '../Screens/DishesScreen';
import DishDetails from '../Screens/DishDetails';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthenticatedNavigator = () => {
    const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => {
          return  (
            <MaterialIcons style={{
              marginRight: 10
            }} onPress= {async () => {
              await AsyncStorage.removeItem("token");
            getUser();
          }}
          name="logout" 
          size={24} 
          color="black" 
          />
          )
        }
      }}
      >
        <Stack.Screen name="Category" component={CategoryScreen}/>
        <Stack.Screen name="Dishes" component={DishesScreen}/>
        <Stack.Screen name="DishesDetails" component={DishDetails}/>
    </Stack.Navigator>
  )
}

export default AuthenticatedNavigator

const styles = StyleSheet.create({})