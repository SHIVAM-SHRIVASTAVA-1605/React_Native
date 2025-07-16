import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AchievementsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Achievements</Text>
    <Text style={styles.subtitle}>🏅 Beginner Badge</Text>
    <Text style={styles.subtitle}>🏅 5-Day Streak</Text>
    <Text style={styles.subtitle}>🏅 First Quiz Completed</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#58cc02', marginBottom: 24 },
  subtitle: { fontSize: 18, color: '#333', marginBottom: 8 },
});

export default AchievementsScreen;
