import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  const favorites = useSelector((state) => state.favorites.items || []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favorite Foods</Text>
      {favorites.length === 0 ? (
        <Text style={styles.empty}>No favorite foods yet.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 24,
  },
  empty: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginTop: 32,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  title: {
    fontSize: 18,
    color: '#333',
  },
});

export default FavoritesScreen;
