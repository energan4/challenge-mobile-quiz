import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import Colors from '../../../utils/Colors';
import {setBarAnimation} from '../../../utils/animationUtils';

export default function ScoreBar({score}) {
  const minScore = score.min;
  const currentScore = score.current;
  const maxScore = 100 - score.max;

  const minProgress = useRef(new Animated.Value(0)).current;
  const currentProgress = useRef(new Animated.Value(0)).current;
  const maxProgress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setBarAnimation(minProgress, minScore);
    setBarAnimation(currentProgress, currentScore);
    setBarAnimation(maxProgress, maxScore);
  });

  const minProgressAnim = minProgress.interpolate({
    inputRange: [0, minScore],
    outputRange: ['0%', minScore + '%'],
  });

  const currentProgressAnim = currentProgress.interpolate({
    inputRange: [0, currentScore],
    outputRange: ['0%', currentScore + '%'],
  });

  const maxProgressAnim = maxProgress.interpolate({
    inputRange: [0, maxScore],
    outputRange: ['0%', maxScore + '%'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>
          {'Score: ' + Math.round(score.current) + '%'}
        </Text>
        <Text style={styles.scoreText}>
          {'Max Score: ' + Math.round(score.max) + '%'}
        </Text>
      </View>
      <View style={styles.primaryScoreBar}>
        <View style={styles.scoreBarContainer}>
          <Animated.View
            style={[styles.minScoreBar, {width: minProgressAnim}]}
          />
          <Animated.View
            style={[styles.currentScoreBar, {width: currentProgressAnim}]}
          />
          <Animated.View
            style={[styles.maxScoreBar, {width: maxProgressAnim}]}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  scoreText: {
    fontSize: 18,
  },
  scoreContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scoreBarContainer: {
    width: '100%',
    height: 20,
    backgroundColor: Colors.light_grey,
  },
  primaryScoreBar: {
    borderWidth: 1,
    borderColor: Colors.black,
  },
  minScoreBar: {
    height: 20,
    backgroundColor: Colors.darker,
    position: 'absolute',
    zIndex: 999,
  },
  currentScoreBar: {
    height: 20,
    backgroundColor: Colors.dark_grey,
    position: 'absolute',
  },
  maxScoreBar: {
    height: 20,
    backgroundColor: Colors.lighter,
    position: 'absolute',
    right: 0,
  },
});
