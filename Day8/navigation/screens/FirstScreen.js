import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const FirstScreen = ( {}) => {
    const navigation = useNavigation();
  return (
    <View>
      <Text>FirstScreen</Text>
      <Pressable onPress={() => {
        navigation.navigate("About", {
            productId: "chair",
        });
      }}>
        <Text>
            Navigate to other screen
        </Text>
      </Pressable>
    </View>
  )
}

export default FirstScreen

const styles = StyleSheet.create({})