import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const questions = [
  {
    type: 'translate',
    question: 'Translate: Hello',
    options: ['Hola', 'Bonjour', 'Hallo', 'Ciao'],
    answer: 'Hola',
  },
  {
    type: 'select',
    question: 'Select the correct word for "Thank you" in Spanish',
    options: ['Gracias', 'Merci', 'Danke', 'Grazie'],
    answer: 'Gracias',
  },
];

const QuizScreen = ({ navigation, route }) => {
  const { lessonId, language, completedLessons = [1, 2] } = route?.params || {};
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleOption = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const handleFinish = () => {
    const lessonNum = parseInt(lessonId);
    let updated = completedLessons.includes(lessonNum) ? completedLessons : [...completedLessons, lessonNum];
    navigation.navigate('Main', { screen: 'Lessons', params: { language, completedLessons: updated } });
  };

  return (
    <View style={styles.container}>
      {finished ? (
        <View>
          <Text style={styles.title}>Quiz Finished!</Text>
          <Text style={styles.subtitle}>Score: {score} / {questions.length}</Text>
          <TouchableOpacity style={styles.button} onPress={handleFinish}>
            <Text style={styles.buttonText}>Back to Lessons</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={styles.title}>{questions[current].question}</Text>
          {questions[current].options.map((option, idx) => (
            <TouchableOpacity key={idx} style={styles.button} onPress={() => handleOption(option)}>
              <Text style={styles.buttonText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#58cc02', marginBottom: 24 },
  subtitle: { fontSize: 18, color: '#333', marginBottom: 16 },
  button: { backgroundColor: '#58cc02', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8, elevation: 2, marginBottom: 12 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default QuizScreen;
