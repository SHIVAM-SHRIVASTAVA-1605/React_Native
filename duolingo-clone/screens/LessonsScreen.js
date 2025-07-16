import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LessonsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lessons</Text>
      <Text style={styles.subtitle}>(Duolingo-style lesson UI will go here)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#58cc02', marginBottom: 24 },
  subtitle: { fontSize: 18, color: '#333' },
});

export default LessonsScreen;
