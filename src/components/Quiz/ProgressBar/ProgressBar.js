import React, {useEffect, useRef} from 'react';

import {StyleSheet, View, Animated} from 'react-native';
import Colors from '../../../utils/Colors';
import {setBarAnimation} from '../../../utils/animationUtils';

export default function ProgressBar(props) {
  const {position, questionsNumber} = props;

  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setBarAnimation(progress, position);
  });

  const progressAnim = progress.interpolate({
    inputRange: [0, questionsNumber],
    outputRange: ['0%', '100%'],
  });

  const barWidth = {
    width: progressAnim,
  };

  return (
    <View style={[styles.progressContainer]}>
      <Animated.View style={[styles.progressBar, barWidth]} />
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
    height: 20,
    backgroundColor: Colors.dark,
  },
});
