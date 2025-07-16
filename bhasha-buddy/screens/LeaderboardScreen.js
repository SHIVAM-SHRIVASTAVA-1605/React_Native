import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LeaderboardScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Leaderboard</Text>
    <Text style={styles.subtitle}>1. You (1200 XP)</Text>
    <Text style={styles.subtitle}>2. Alice (1100 XP)</Text>
    <Text style={styles.subtitle}>3. Bob (900 XP)</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#58cc02', marginBottom: 24 },
  subtitle: { fontSize: 18, color: '#333', marginBottom: 8 },
});

export default LeaderboardScreen;
