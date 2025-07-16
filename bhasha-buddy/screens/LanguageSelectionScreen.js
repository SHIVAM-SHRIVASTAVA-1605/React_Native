import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const languages = [
  { label: 'Spanish', value: 'spanish', color: '#FFD600', icon: '🇪🇸' },
  { label: 'French', value: 'french', color: '#00B0FF', icon: '🇫🇷' },
  { label: 'German', value: 'german', color: '#FF5252', icon: '🇩🇪' },
  { label: 'Italian', value: 'italian', color: '#69F0AE', icon: '🇮🇹' },
  { label: 'Hindi', value: 'hindi', color: '#FFAB00', icon: '🇮🇳' },
];

const LanguageSelectionScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What language do you want to learn?</Text>
      <View style={styles.grid}>
        {languages.map(lang => (
          <Animated.View key={lang.value} style={[styles.card, { backgroundColor: lang.color, transform: [{ scale: selected === lang.value ? 1.1 : 1 }] }]}> 
            <TouchableOpacity onPress={() => { setSelected(lang.value); setTimeout(() => navigation.navigate('Signup', { language: lang.value }), 300); }}>
              <Text style={styles.icon}>{lang.icon}</Text>
              <Text style={styles.cardText}>{lang.label}</Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#58cc02', marginBottom: 32, textAlign: 'center' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 16 },
  card: { width: 120, height: 120, borderRadius: 24, justifyContent: 'center', alignItems: 'center', margin: 12, elevation: 4 },
  cardText: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
  icon: { fontSize: 40, marginBottom: 8 },
});

export default LanguageSelectionScreen;
