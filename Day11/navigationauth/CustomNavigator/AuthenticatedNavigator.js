import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CategoryScreen from '../Screens/CategoryScreen';
import DishesScreen from '../Screens/DishesScreen';
import DishDetails from '../Screens/DishDetails';

const AuthenticatedNavigator = () => {
    const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
        <Stack.Screen name="Category" component={CategoryScreen}/>
        <Stack.Screen name="Dishes" component={DishesScreen}/>
        <Stack.Screen name="DishesDetails" component={DishDetails}/>
    </Stack.Navigator>
  )
}

export default AuthenticatedNavigator

const styles = StyleSheet.create({})