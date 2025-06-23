import { Pressable, StyleSheet, Text, View , TextInput} from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import ScreenTitle from './ScreenTitle'
import {LinearGradient} from "expo-linear-gradient";

export default function StartGameScreen() {
  return (
    <View style={{flex: 1}}>
      <LinearGradient colors={['#4c9f83', '#3b5998', '#192a25']} style={{height: "100%" }}>
    <ScreenTitle children={"Guess the numbeer"} />

    <View style={styles.inputContainer}>
      <TextInput keyboardType="number-pad"
        maxLength={2} 
        style= {styles.textInputStyle}
        autoCapitalize='none'
        autoCorrect = {false}
        />
      <View style={styles.buttonContainer}>
        <PrimaryButton children={"Reset"} />
        <PrimaryButton children={"Confirm"} />
      </View>
    </View>
    </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: "#f83bad",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        marginHorizontal: 24,
        padding: 24,
        borderRadius: 8,
        elevation: 49,
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.28,
    },
    textInputStyle: {
        width: 50,
        color: "yellow",
        fontWeight: "bold",
        fontSize: 28,
        marginVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: "orange",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 50,
    },
})