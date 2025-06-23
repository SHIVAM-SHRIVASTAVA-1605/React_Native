import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View >
      <Text style = {styles.textStyles}>
        Open up App.js to start working on your app!
      </Text>
      <Text style = {styles.textStyles}>
        Open up App.js to start working on your app!
      </Text>
      <Text style = {styles.textStyles}>
        Open up App.js to start working on your app!
      </Text>
      <TextInput placeholder='submit' />
      <Button title= "Press" onPress={() => {

      }}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyles: {
    backgroundColor: "red",
    color: "white",
  },
});
