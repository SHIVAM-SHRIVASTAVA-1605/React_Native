import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LoginScreen from './LoginScreen';


const RegisterScreen = () => {
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
                    title='Register User'
                    onPress={() => {
                        console.log({email, password});
                        navigation.navigate("Login");
                    }}
                />
            <Text onPress={()=> {
                navigation.navigate("Login");
            }}>
                
            Already a User ? Login
            </Text>
        </View>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})