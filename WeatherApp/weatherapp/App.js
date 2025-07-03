import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, Button, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { API_KEY } from './config';
import WeatherCard from './components/WeatherCard';

export default function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city) return;
    try {
      setLoading(true);
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      setWeather(res.data);
    } catch (err) {
      alert("City not found!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather App 🌤️</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Get Weather" onPress={fetchWeather} />

      {loading && <ActivityIndicator size="large" color="#0000ff" />}

      {/* {weather && (
        <View style={styles.result}>
          <Text style={styles.city}>{weather.name}</Text>
          <Text style={styles.temp}>{weather.main.temp} °C</Text>
          <Text>{weather.weather[0].description}</Text>
          <Text>Humidity: {weather.main.humidity}%</Text>
          <Text>Wind Speed: {weather.wind.speed} m/s</Text>
          <Image
            source={{ uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` }}
            style={{ width: 100, height: 100 }}
          />
        </View>
      )} */}
      {weather && (
  <WeatherCard
    city={weather.name}
    temp={weather.main.temp}
    description={weather.weather[0].description}
    icon={weather.weather[0].icon}
    humidity={weather.main.humidity}
    wind={weather.wind.speed}
  />
)}

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#cce7ff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  result: {
    alignItems: 'center',
    marginTop: 20,
  },
  city: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 50,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});