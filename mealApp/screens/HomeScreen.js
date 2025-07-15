import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" }}
        style={styles.heroImage}
      />
      <Text style={styles.title}>Welcome to MealApp!</Text>
      <Text style={styles.subtitle}>Discover delicious meals and recipes by category.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Category")}
      >
        <Text style={styles.buttonText}>Browse Categories</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  heroImage: {
    width: "100%",
    height: 220,
    borderRadius: 16,
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    marginBottom: 24,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#ff7043",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;
