import React from 'react';
import {Animated} from 'react-native';

export const setBarAnimation = (progress, value) => {
  Animated.timing(progress, {
    toValue: value,
    duration: 700,
    useNativeDriver: false,
  }).start();
};
