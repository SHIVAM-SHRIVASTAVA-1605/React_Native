import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const languages = [
  { label: 'Spanish', value: 'spanish' },
  { label: 'French', value: 'french' },
  { label: 'German', value: 'german' },
  { label: 'Italian', value: 'italian' },
  { label: 'Hindi', value: 'hindi' },
];

const SignupScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState(route?.params?.language || languages[0].value);

  const handleSignup = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }
    navigation.navigate('Main', { language });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bhasha Buddy Signup</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text style={styles.label}>Choose a language to learn:</Text>
      <Picker
        selectedValue={language}
        style={styles.input}
        onValueChange={(itemValue) => setLanguage(itemValue)}
      >
        {languages.map(lang => (
          <Picker.Item key={lang.value} label={lang.label} value={lang.value} />
        ))}
      </Picker>
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.link} onPress={() => navigation.navigate('Login')}>Already have an account? Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#58cc02', marginBottom: 24 },
  input: { width: '100%', padding: 14, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, marginBottom: 16, fontSize: 16 },
  button: { backgroundColor: '#58cc02', paddingVertical: 14, paddingHorizontal: 32, borderRadius: 8, elevation: 2, marginBottom: 16 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  link: { color: '#58cc02', fontSize: 16, marginTop: 8, textDecorationLine: 'underline' },
  label: { fontSize: 16, color: '#333', marginBottom: 8 },
});

export default SignupScreen;
