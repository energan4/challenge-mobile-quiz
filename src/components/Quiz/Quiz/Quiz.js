import React, {useState} from 'react';
import Node from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import Title from '../Title/Title';

import jsonQuestions from '../../../data/questions.json';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../utils/Colors';
import Question from '../Question/Question';
import Answers from '../Answers/Answers';
import QuestionResult from '../QuestionResult/QuestionResult';
import ProgressBar from '../ProgressBar/ProgressBar';
import ScoreBar from '../ScoreBar/ScoreBar';
import QuizResult from '../QuizResult/QuizResult';

const Quiz: () => Node = () => {
  const questions = jsonQuestions;
  const [position, setPosition] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
  const [correctAnswersNumber, setCorrectAnswersNumber] = useState(0);
  const [incorrectAnswersNumber, setIncorrectAnswersNumber] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [isQuestionResultVisible, setIsQuestionResultVisible] = useState(false);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [score, setScore] = useState({
    min: 0,
    current: 0,
    max: 100,
  });

  const calculateScore = () => {
    setScore({
      min: (correctAnswersNumber / questions.length) * 100,
      current: (correctAnswersNumber / position) * 100,
      max:
        ((questions.length - incorrectAnswersNumber) / questions.length) * 100,
    });
  };

  const emitAnswer = answer => {
    setIsQuestionResultVisible(true);
    setIsCorrectAnswer(answer.isCorrect);
    if (answer.isCorrect) {
      setCorrectAnswersNumber(prev => prev + 1);
    } else {
      setIncorrectAnswersNumber(prev => prev + 1);
    }
    const isLastPosition = position === questions.length;
    if (isLastPosition) {
      setIsLastQuestion(true);
    }
  };

  const setNextQuestion = () => {
    const isLastPosition = position === questions.length;
    if (isLastPosition) {
      setIsQuizFinished(true);
    } else {
      setPosition(prev => prev + 1);
      setCurrentQuestion(questions[position]);
    }
    calculateScore();
    setIsQuestionResultVisible(false);
  };

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView
      style={[
        {paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0},
        styles.container,
        backgroundStyle,
      ]}>
      <View style={styles.quizPrimaryContainer}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ProgressBar position={position} questionsNumber={questions.length} />
        <View style={styles.quizSecondaryContainer}>
          <Title
            position={position}
            questionsNumber={questions.length}
            category={currentQuestion.category}
            difficulty={currentQuestion.difficulty}
          />
          <Question question={currentQuestion.question} />
          <Answers
            position={position}
            emitAnswer={emitAnswer}
            correctAnswer={currentQuestion.correct_answer}
            incorrectAnswers={currentQuestion.incorrect_answers}
          />
          {isQuestionResultVisible && (
            <QuestionResult
              isLastQuestion={isLastQuestion}
              isCorrectAnswer={isCorrectAnswer}
              setNextQuestion={setNextQuestion}
            />
          )}
        </View>
        {isQuizFinished && (
          <QuizResult
            finalScore={score.current}
            correctAnswersNumber={correctAnswersNumber}
            questionsNumber={questions.length}
          />
        )}
      </View>
      {!isQuizFinished && <ScoreBar style={{height: 100}} score={score} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'space-between',
  },
  quizPrimaryContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quizSecondaryContainer: {
    width: '98%',
    marginHorizontal: 'auto',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 50,
  },
});

export default Quiz;
