import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => (
  <View style={styles.container}>
    <Image source={{ uri: 'https://api.dicebear.com/7.x/bottts/svg?seed=duo' }} style={styles.avatar} />
    <Text style={styles.title}>Your Profile</Text>
    <Text style={styles.subtitle}>XP: 1200</Text>
    <Text style={styles.subtitle}>Streak: 5 days 🔥</Text>
    <Text style={styles.subtitle}>Achievements: 3 badges</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 16 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#58cc02', marginBottom: 16 },
  subtitle: { fontSize: 18, color: '#333', marginBottom: 8 },
});

export default ProfileScreen;
