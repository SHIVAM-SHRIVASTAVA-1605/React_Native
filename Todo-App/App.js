import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Appmanager from './manager/Appmanager';
import { PaperProvider } from 'react-native-paper';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor = {"lightpink"} barStyle={"dark-content"} />
      <PaperProvider> 
        <Appmanager />
      </PaperProvider>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
