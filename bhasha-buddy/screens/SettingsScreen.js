import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SettingsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Settings</Text>
    <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Change Language</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Notification Settings</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Account Settings</Text></TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#58cc02', marginBottom: 24 },
  button: { backgroundColor: '#58cc02', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8, elevation: 2, marginBottom: 12 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default SettingsScreen;
