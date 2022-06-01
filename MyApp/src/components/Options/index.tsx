import React from 'react';
import {View, Text} from 'react-native';

import type {FeedbackType} from '../Widget';

import Option from '../Option';
import Copyright from '../Copyright';

import feedbackTypes from '../../constants/feedbackTypes';

import styles from './styles';

type Props = {
  onFeedbackChange: (value: FeedbackType | null) => void;
};

const Options = ({onFeedbackChange}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu feeback!</Text>
      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option
            key={key}
            title={value.title}
            image={value.image}
            onPress={() => onFeedbackChange(key as FeedbackType)}
          />
        ))}
      </View>
      <Copyright />
    </View>
  );
};

export default Options;
