import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'
import CategoryScreen from './CategoryScreen'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginScreen = () => {
    const route = useRoute();
    const { setIsUserLoggedIn, getUser} = route.params;
    const [email, setEmail]  = useState("");
    const navigation = useNavigation();
    const [password, setPassword]  = useState("");
  return (
    <View>
        <View>
            <TextInput 
                placeholder='Enter your Email' 
                onChangeText={(email) => setEmail(email)
            }/> 
            <TextInput 
                placeholder='Enter your Password'  
                onChangeText={(password) => setPassword(password)} 
                secureTextEntry={true}
            />
            <Button
                title='Login User'
                onPress={async () => {
                    console.log({email, password});
                    await AsyncStorage.setItem("token", "abcd");
                    getUser();
                }}
            />
            <Text onPress={()=> {
                navigation.navigate("Register");
            }}>
                New User ? Register
            </Text>
        </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})