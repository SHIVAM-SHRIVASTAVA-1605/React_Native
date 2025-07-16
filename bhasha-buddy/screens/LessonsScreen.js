import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const lessonPaths = {
  spanish: Array.from({ length: 30 }, (_, i) => ({ id: `${i+1}`, title: `Spanish Lesson ${i+1}` })),
  french: Array.from({ length: 30 }, (_, i) => ({ id: `${i+1}`, title: `French Lesson ${i+1}` })),
  german: Array.from({ length: 30 }, (_, i) => ({ id: `${i+1}`, title: `German Lesson ${i+1}` })),
  italian: Array.from({ length: 30 }, (_, i) => ({ id: `${i+1}`, title: `Italian Lesson ${i+1}` })),
  hindi: Array.from({ length: 30 }, (_, i) => ({ id: `${i+1}`, title: `Hindi Lesson ${i+1}` })),
};

const LessonsScreen = ({ route, navigation }) => {
  const [language, setLanguage] = useState(route?.params?.language || 'spanish');
  const [completedLessons, setCompletedLessons] = useState(route?.params?.completedLessons || [1, 2]);
  useEffect(() => {
    if (route?.params?.language) {
      setLanguage(route.params.language);
    }
    if (route?.params?.completedLessons) {
      setCompletedLessons(route.params.completedLessons);
    }
  }, [route?.params?.language, route?.params?.completedLessons]);

  const lessons = lessonPaths[language] || lessonPaths['spanish'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lessons ({language.charAt(0).toUpperCase() + language.slice(1)})</Text>
      {lessons.map((lesson, idx) => {
        const lessonNum = parseInt(lesson.id);
        const isCompleted = completedLessons.includes(lessonNum);
        const isUnlocked = isCompleted || lessonNum === Math.max(...completedLessons) + 1;
        return (
          <TouchableOpacity
            key={lesson.id}
            style={[styles.lessonCard, isCompleted ? styles.completed : isUnlocked ? styles.unlocked : styles.locked]}
            disabled={!isUnlocked}
            onPress={() => navigation.navigate('Quiz', { lessonId: lesson.id, language, completedLessons })}
          >
            <Text style={[styles.lessonTitle, isUnlocked ? { color: '#fff' } : { color: '#58cc02' }]}>{lesson.title}</Text>
            <Text style={[styles.lessonNum, isUnlocked ? { color: '#fff' } : { color: '#58cc02' }]}>{lesson.id}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#58cc02', marginBottom: 24, textAlign: 'center' },
  lessonCard: { backgroundColor: '#e5f9e7', padding: 18, borderRadius: 12, marginBottom: 16, elevation: 2, flexDirection: 'row', alignItems: 'center', gap: 12 },
  completed: { backgroundColor: '#58cc02' },
  unlocked: { backgroundColor: '#e5f9e7' },
  locked: { backgroundColor: '#f0f0f0' },
  lessonTitle: { fontSize: 20, color: '#333', fontWeight: 'bold' },
  lessonNum: { fontSize: 16, fontWeight: 'bold', marginLeft: 12 },
});

export default LessonsScreen;
