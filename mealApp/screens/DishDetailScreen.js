import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { MEALS } from "../utils/dummy-data";
import UnOrderedList from "../components/UnOrderedList";

const DishDetailScreen = ({ route }) => {
  const meal = MEALS.find((item) => item.id == route.params.mealId);
  if (!meal) {
    return (
      <View style={styles.centered}>
        <Text>Meal not found.</Text>
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: meal.imageUrl }}
      />
      <Text style={styles.title}>{meal.title}</Text>
      <Text style={styles.subtitle}>Duration: {meal.duration} min | Complexity: {meal.complexity} | Affordability: {meal.affordability}</Text>
      <Text style={styles.sectionHeader}>Ingredients</Text>
      <UnOrderedList data={meal.ingredients} />
      <Text style={styles.sectionHeader}>Steps</Text>
      <UnOrderedList data={meal.steps} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Added to Favorites!', 'This meal has been added to your favorites.')}
      >
        <Text style={styles.buttonText}>Add to Favorites</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff7043',
    marginTop: 16,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#ff7043',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 2,
    alignSelf: 'center',
    marginTop: 24,
    marginBottom: 32,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DishDetailScreen;
