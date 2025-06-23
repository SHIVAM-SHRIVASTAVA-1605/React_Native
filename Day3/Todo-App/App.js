import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [todos, setTodos] = useState([
    {
      title: "I wanna take Class",
      user: "Wasi",
    },
    {
      title: "I wanna take Class",
      user: "Wasi",
    },
    {
      title: "I wanna take Class",
      user: "Wasi",
    },
    {
      title: "I wanna take Class",
      user: "Wasi",
    },
    {
      title: "I wanna take Class",
      user: "Wasi",
    },
    {
      title: "I wanna take Class",
      user: "Wasi",
    },
    {
      title: "I wanna take Class",
      user: "Wasi",
    },
    {
      title: "I wanna take Class",
      user: "Wasi",
    },
    {
      title: "I wanna take Class",
      user: "Wasi",
    },
    {
      title: "I wanna take Class",
      user: "Wasi",
    },
    {
      title: "I wanna take Class",
      user: "Wasi",
    },
    {
      title: "I wanna take Class",
      user: "Wasi",
    },
    {
      title: "I wanna take Class",
      user: "Wasi",
    },
    {
      title: "I wanna take Class",
      user: "Wasi",
    },
    {
      title: "I wanna take Class",
      user: "Wasi",
    },
    {
      title: "I wanna take Class",
      user: "Wasi",
    },
    {
      title: "I wanna take Class",
      user: "Wasi",
    },
    {
      title: "I wanna take Class",
      user: "Wasi",
    },
    {
      title: "I wanna take Class",
      user: "Wasi",
    },
    {
      title: "I wanna take Class",
      user: "Wasi",
    },
    {
      title: "I wanna take Class",
      user: "Wasi",
    },
    {
      title: "I wanna take Class",
      user: "Wasi",
    },
    {
      title: "I wanna take Class",
      user: "Wasi",
    },
    {
      title: "I wanna take Class",
      user: "Wasi",
    },
    {
      title: "I wanna take Class",
      user: "Wasi",
    },
    {
      title: "I wanna take Class",
      user: "Wasi",
    },
  ]);

  return (
    <SafeAreaProvider>
      <>
        <View style={styles.container}>
          <View style={styles.innerView}>
            <TextInput style={styles.inputElement} placeholder="Add Todo" />
            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={{ color: "black" }}>Add Todo</Text>
            </TouchableOpacity>
          </View>
          <>
            {/* <ScrollView style={styles.todoView}>
              {todos.map((item, index) => {
                return (
                  <Text key={index} style={styles.listItemStyle}>
                    {item.title}
                  </Text>
                );
              })}
            </ScrollView> */}
            <FlatList
              style={styles.todoView}
              data={todos}
              renderItem={({item}, index) => (
                <Text key={index} style={styles.listItemStyle}>
                  {item.title}
                </Text>
              )}
              // keyExtractor={(item) => item.user}
            />
          </>
          <StatusBar style="auto" />
        </View>
      </>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffa4a0",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 15,
  },
  innerView: {
    // `flex: 1`
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  inputElement: {
    borderColor: "black",
    borderWidth: 2,
    width: "70%",
  },
  todoView: {
    flex: 1,
    flexDirection: "column",
    borderColor: "black",
    borderTopWidth: 0.5,
    width: "100%",
    padding: 20,
  },
  buttonStyle: {
    padding: 13,
    backgroundColor: "#F1684E",
    color: "white",
    borderRadius: 10,
  },
  listItemStyle: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 5,
    marginBottom: 15,
  },
});