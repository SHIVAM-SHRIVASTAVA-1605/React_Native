import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { CATEGORIES } from "../utils/dummy-data";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const CategoryScreenHeader = ({ navigation }) => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Text
      style={{
        fontSize: 28,
        fontWeight: "bold",
        color: "#333",
        flex: 1,
      }}
    >
      Categories
    </Text>
    <Pressable onPress={() => navigation.navigate("Favorites")}>
      <MaterialIcons
        name="favorite"
        size={28}
        color="#ff7043"
        style={{ marginRight: 16 }}
      />
    </Pressable>
    <Pressable onPress={() => navigation.navigate("Cart")}>
      <MaterialIcons
        name="shopping-cart"
        size={28}
        color="#333"
        style={{ marginRight: 8 }}
      />
    </Pressable>
  </View>
);

const CategoryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CategoryScreenHeader navigation={navigation} />
      <ScrollView
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
      >
        {CATEGORIES.map((item, index) => (
          <Pressable
            key={index}
            style={({ pressed }) => [
              styles.card,
              { backgroundColor: item.color, opacity: pressed ? 0.7 : 1 },
            ]}
            android_ripple={{ color: "#fff" }}
            onPress={() => {
              navigation.navigate("DishList", {
                categoryId: item.id,
              });
            }}
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingTop: 32,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
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
    padding: 40,
    borderRadius: 16,
    width: 170,
    marginBottom: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: "center",
  },
  cardTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});

export default CategoryScreen;
