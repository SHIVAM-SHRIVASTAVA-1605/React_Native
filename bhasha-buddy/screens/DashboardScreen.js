import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DashboardScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Dashboard</Text>
    <Text style={styles.subtitle}>XP: 1200</Text>
    <Text style={styles.subtitle}>Streak: 5 days 🔥</Text>
    <Text style={styles.subtitle}>Daily Goal: 30 XP</Text>
    <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Claim Daily Reward</Text></TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#58cc02', marginBottom: 24 },
  subtitle: { fontSize: 18, color: '#333', marginBottom: 8 },
  button: { backgroundColor: '#58cc02', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8, elevation: 2, marginTop: 16 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default DashboardScreen;
