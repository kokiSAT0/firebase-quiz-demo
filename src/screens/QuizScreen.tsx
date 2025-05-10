import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import QuestionCard from '../components/QuestionCard';

interface QuestionData {
  id: string;
  text: string;
  options: string[];
}

export default function QuizScreen() {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'questions'));
        const loadedQuestions: QuestionData[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          // console.log("raw firestore data:", data); 
          loadedQuestions.push({
            id: doc.id,
            text: data.text,
            options: data.options,
          });
        });
        setQuestions(loadedQuestions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (questions.length === 0) {
    return (
      <View style={styles.center}>
        <Text>No questions found.</Text>
      </View>
    );
  }

  // サンプルとして、先頭の質問のみ表示する
  const question = questions[0];

  return (
    <View style={styles.container}>
      <QuestionCard question={question.text} options={question.options} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
