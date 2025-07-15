import { View, Text, Pressable, Image, StyleSheet, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import { MEALS } from "../utils/dummy-data";
import { useNavigation } from "@react-navigation/native";

const DishesScreen = ({ route }) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const data = MEALS.filter((item) => {
        return item.categories.includes(route.params.categoryId);
      });
      setFilteredData(data);
      setLoading(false);
    }, 600); // Simulate loading
  }, [route.params.categoryId]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#ff7043" />
        <Text style={{ marginTop: 12 }}>Loading dishes...</Text>
      </View>
    );
  }

  if (filteredData.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No dishes found for this category.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dishes</Text>
      <View style={styles.grid}>
        {filteredData.map((item, index) => (
          <Pressable
            key={item.id}
            style={({ pressed }) => [
              styles.card,
              { opacity: pressed ? 0.7 : 1 },
            ]}
            onPress={() => {
              navigation.navigate("DisheDetail", {
                mealId: item.id,
              });
            }}
          >
            <Image
              style={styles.imageStyle}
              source={{ uri: item.imageUrl }}
              alt={item.title}
            />
            <Text style={styles.cardTitle}>{item.title}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 32,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 16,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    width: 170,
    marginBottom: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: 'center',
    padding: 12,
  },
  cardTitle: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    marginTop: 8,
  },
  imageStyle: {
    width: 120,
    height: 90,
    borderRadius: 12,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DishesScreen;
