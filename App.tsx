import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import QuizScreen from './src/screens/QuizScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <QuizScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
