import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View>
      <Button title='Login' onPress={async () => {
        const response = await Register("shivam@gmail.com","shivam@1234","shivam");
        console.log("response --> ", response)
      }} />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})