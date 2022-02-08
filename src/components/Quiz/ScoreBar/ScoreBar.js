import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../../utils/Colors';

export default function ScoreBar({score}) {
  const minScore = score.min;
  const currentScore = score.current;
  const maxScore = 100 - score.max;

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
          <View
            style={[
              styles.scoreBar,
              {
                backgroundColor: Colors.darker,
                width: minScore + '%',
                position: 'absolute',
                zIndex: 999,
              },
            ]}
          />
          <View
            style={[
              styles.scoreBar,
              {
                backgroundColor: Colors.dark_grey,
                width: currentScore + '%',
                position: 'absolute',
              },
            ]}
          />
          <View
            style={[
              styles.scoreBar,
              {
                backgroundColor: Colors.lighter,
                width: maxScore + '%',
                position: 'absolute',
                right: 0,
              },
            ]}
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
  scoreBar: {
    height: 20,
  },
});
