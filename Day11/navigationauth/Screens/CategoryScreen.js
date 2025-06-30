import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CategoryScreen = () => {
    const navigation = useNavigation();
    navigation.setOptions({
        title: "Nothing"
    });
  return (
    <View>
      <Text>CategoryScreen</Text>
    </View>
  )
}

export default CategoryScreen

const styles = StyleSheet.create({})