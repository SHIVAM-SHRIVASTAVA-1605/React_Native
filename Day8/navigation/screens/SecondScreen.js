import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SecondScreen = ( { route }) => {
    console.log("Route.params", route.params);
  return (
    <View>
      <Text>SecondScreen</Text>
    </View>
  )
}

export default SecondScreen

const styles = StyleSheet.create({})