import React from 'react';
import {Text, View} from 'react-native';

export default function Question(props) {
  return (
    <View>
      <Text style={styles.title}>{decodeURIComponent(props.question)}</Text>
    </View>
  );
}

const styles = {
  title: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: '400',
  },
};
