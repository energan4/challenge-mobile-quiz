import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function QuizResult(props) {
  const finalScore = props.finalScore;
  const correctAnswersNumber = props.correctAnswersNumber;
  const questionsNumber = props.questionsNumber;

  return (
    <View style={styles.quizResultContainer}>
      <Text style={styles.quizResultText}>
        You achieved a score of {Math.round(finalScore)}%
      </Text>
      <Text style={styles.quizResultText}>
        You correctly answered {correctAnswersNumber} questions out of{' '}
        {questionsNumber}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  quizResultContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 40,
  },
  quizResultText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
