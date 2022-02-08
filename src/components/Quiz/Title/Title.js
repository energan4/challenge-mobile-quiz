import React from 'react';
import Colors from '../../../utils/Colors';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Title(props) {
  let difficulty = 0;

  switch (props.difficulty) {
    case 'easy':
      difficulty = 1;
      break;
    case 'medium':
      difficulty = 2;
      break;
    case 'hard':
      difficulty = 3;
      break;
  }

  function getStarsHtml() {
    let starsHtml = [];
    for (let i = 1; i < 3; i++) {
      if (i < difficulty) {
        starsHtml.push(
          <Icon
            key={i.toString()}
            name="star"
            size={14}
            color={Colors.black}
          />,
        );
      } else {
        starsHtml.push(
          <Icon
            key={i.toString()}
            name="star"
            size={14}
            color={Colors.light}
          />,
        );
      }
    }
    return starsHtml;
  }

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>
        Question {props.position} out of {props.questionsNumber}
      </Text>
      <Text style={styles.category}>{decodeURIComponent(props.category)}</Text>
      <View style={styles.starsContainer}>
        <Icon name="star" size={14} color={Colors.black} />

        {getStarsHtml()}

        <Icon name="star" size={14} color={Colors.light} />

        <Icon name="star" size={14} color={Colors.light} />
      </View>
    </View>
  );
}

const styles = {
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  category: {
    marginTop: 2,
    fontSize: 18,
    fontWeight: '400',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  starsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 4,
  },
};
