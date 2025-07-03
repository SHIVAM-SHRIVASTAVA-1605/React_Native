import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WeatherCard = ({ city, temp, description, icon, humidity, wind }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.city}>{city}</Text>
      <Image
        style={styles.icon}
        source={{ uri: `https://openweathermap.org/img/wn/${icon}@2x.png` }}
      />
      <Text style={styles.temp}>{temp} °C</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.details}>
        <Text style={styles.detail}>💧 Humidity: {humidity}%</Text>
        <Text style={styles.detail}>💨 Wind: {wind} m/s</Text>
      </View>
    </View>
  );
};

export default WeatherCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffffee',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 5,
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  city: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  icon: {
    width: 100,
    height: 100,
  },
  temp: {
    fontSize: 42,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#000',
  },
  description: {
    fontSize: 18,
    fontStyle: 'italic',
    textTransform: 'capitalize',
    color: '#555',
  },
  details: {
    marginTop: 10,
  },
  detail: {
    fontSize: 16,
    color: '#444',
    marginTop: 5,
  },
});
