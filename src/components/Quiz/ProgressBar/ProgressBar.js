import React from 'react';

import {StyleSheet, View} from 'react-native';
import Colors from '../../../utils/Colors';

export default function ProgressBar(props) {
  const position = props.position;
  const questionsNumber = props.questionsNumber;
  const width = (position / questionsNumber) * 100;

  return (
    <View style={styles.progressContainer}>
      <View style={[styles.progressBar, {width: width + '%'}]} />
    </View>
  );
}
const styles = StyleSheet.create({
  progressContainer: {
    width: '100%',
    height: 20,
    backgroundColor: Colors.light,
  },
  progressBar: {
    width: '100%',
    height: 20,
    backgroundColor: Colors.dark,
  },
});
