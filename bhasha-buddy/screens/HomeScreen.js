import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const languages = [
  { label: 'Spanish', value: 'spanish' },
  { label: 'French', value: 'french' },
  { label: 'German', value: 'german' },
  { label: 'Italian', value: 'italian' },
  { label: 'Hindi', value: 'hindi' },
];

const lessonPaths = {
  spanish: Array.from({ length: 30 }, (_, i) => ({ id: `${i+1}`, title: `Spanish Lesson ${i+1}` })),
  french: Array.from({ length: 30 }, (_, i) => ({ id: `${i+1}`, title: `French Lesson ${i+1}` })),
  german: Array.from({ length: 30 }, (_, i) => ({ id: `${i+1}`, title: `German Lesson ${i+1}` })),
  italian: Array.from({ length: 30 }, (_, i) => ({ id: `${i+1}`, title: `Italian Lesson ${i+1}` })),
  hindi: Array.from({ length: 30 }, (_, i) => ({ id: `${i+1}`, title: `Hindi Lesson ${i+1}` })),
};

const HomeScreen = ({ navigation }) => {
  const [language, setLanguage] = useState('spanish');
  const [modalVisible, setModalVisible] = useState(false);
  const [completedLessons, setCompletedLessons] = useState([1, 2]); // Example: lessons 1 and 2 completed

  const lessons = lessonPaths[language];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.langBtn}>
          <MaterialIcons name="language" size={28} color="#58cc02" />
        </TouchableOpacity>
        <Text style={styles.title}>Welcome to Bhasha Buddy!</Text>
      </View>
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose Language</Text>
            <Picker
              selectedValue={language}
              style={styles.input}
              onValueChange={(itemValue) => setLanguage(itemValue)}
            >
              {languages.map(lang => (
                <Picker.Item key={lang.value} label={lang.label} value={lang.value} />
              ))}
            </Picker>
            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Text style={styles.subtitle}>Your progress: 40%</Text>
      <FlatList
        data={lessons}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.lessonList}
        renderItem={({ item, index }) => {
          const lessonNum = parseInt(item.id);
          const isCompleted = completedLessons.includes(lessonNum);
          const isUnlocked = isCompleted || lessonNum === Math.max(...completedLessons) + 1;
          return (
            <View>
              <View style={[styles.lessonRow, index % 2 === 0 ? styles.left : styles.right]}>
                <TouchableOpacity
                  style={[styles.lessonCircle, isCompleted ? styles.completed : isUnlocked ? styles.unlocked : styles.locked]}
                  disabled={!isUnlocked}
                  onPress={() => navigation.navigate('Quiz', { lessonId: item.id, language, completedLessons })}
                >
                  <Text style={[styles.lessonText, isUnlocked ? { color: '#fff' } : { color: '#58cc02' }]}>{item.id}</Text>
                </TouchableOpacity>
              </View>
              {index < lessons.length - 1 && (
                <View style={[styles.rope, index % 2 === 0 ? styles.ropeLeft : styles.ropeRight]} />
              )}
            </View>
          );
        }}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Lessons', { language, completedLessons })}>
        <Text style={styles.buttonText}>View All Lessons</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
        <Text style={styles.buttonText}>View Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  langBtn: { marginRight: 12 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#58cc02' },
  subtitle: { fontSize: 18, color: '#333', marginBottom: 16 },
  lessonList: { paddingVertical: 24 },
  lessonRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 8, height: 64 },
  left: { justifyContent: 'flex-start' },
  right: { justifyContent: 'flex-end' },
  lessonCircle: { width: 64, height: 64, borderRadius: 32, backgroundColor: '#e5f9e7', justifyContent: 'center', alignItems: 'center', elevation: 3 },
  lessonText: { fontSize: 22, color: '#58cc02', fontWeight: 'bold' },
  button: { backgroundColor: '#58cc02', paddingVertical: 14, paddingHorizontal: 32, borderRadius: 8, elevation: 2, marginBottom: 16, alignSelf: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.3)' },
  modalContent: { backgroundColor: '#fff', padding: 24, borderRadius: 16, alignItems: 'center', width: 300 },
  modalTitle: { fontSize: 22, fontWeight: 'bold', color: '#58cc02', marginBottom: 16 },
  input: { width: 220 },
  rope: { width: 32, height: 32, borderLeftWidth: 4, borderColor: '#bdbdbd', alignSelf: 'center' },
  ropeLeft: { marginLeft: 32, borderTopLeftRadius: 16, borderBottomLeftRadius: 16 },
  ropeRight: { marginRight: 32, borderTopRightRadius: 16, borderBottomRightRadius: 16 },
  completed: { backgroundColor: '#58cc02' },
  unlocked: { backgroundColor: '#e5f9e7' },
  locked: { backgroundColor: '#f0f0f0' },
});

export default HomeScreen;
