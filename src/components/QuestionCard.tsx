import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface QuestionCardProps {
  question: string;
  options: string[];
}

export default function QuestionCard({ question, options }: QuestionCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionPress = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.question}>{question}</Text>

      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.option,
            selectedOption === option && styles.selectedOption,
          ]}
          onPress={() => handleOptionPress(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      {selectedOption && (
        <Text style={styles.selectedText}>
          あなたが選択した答え: {selectedOption}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  option: {
    padding: 12,
    marginVertical: 6,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
  },
  selectedOption: {
    backgroundColor: '#cce5ff',
  },
  optionText: {
    fontSize: 16,
  },
  selectedText: {
    marginTop: 16,
    fontStyle: 'italic',
    color: '#333',
  },
});
