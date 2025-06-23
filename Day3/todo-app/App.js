import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ToDoComponent from './components/Todo';
import ListView from './components/ListView';

export default function App() {
  return (
    <View style={styles.container}>
      <ListView>

      </ListView>
      <ToDoComponent>

      </ToDoComponent>
      <Text>Open up App.js to start working on your app!</Text>
      <Image source = "" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
