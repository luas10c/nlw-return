import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Copyright from '../Copyright';

import SuccessIcon from '../../assets/success.svg';

import styles from './styles';

type Props = {
  onSendAnotherFeedback: () => void;
};

const Success = ({onSendAnotherFeedback}: Props) => {
  return (
    <View style={styles.container}>
      <SuccessIcon style={styles.image} />
      <Text style={styles.title}>Agradecemos o feedback!</Text>

      <TouchableOpacity style={styles.button} onPress={onSendAnotherFeedback}>
        <Text style={styles.button_text}>Quero enviar outro</Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
};

export default Success;
