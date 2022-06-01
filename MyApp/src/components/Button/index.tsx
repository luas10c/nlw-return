import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
  Text,
} from 'react-native';
import colors from '../../constants/colors';

import styles from './styles';

interface Props extends TouchableOpacityProps {
  isLoading: boolean;
}

const Button = ({isLoading, disabled, ...rest}: Props) => {
  return (
    <TouchableOpacity
      disabled={isLoading || disabled}
      {...rest}
      style={[
        styles.container,
        (isLoading || disabled) && styles.button_disabled,
      ]}>
      {isLoading ? (
        <ActivityIndicator color={colors.text_on_brand_color} />
      ) : (
        <Text style={styles.title}>Enviar Feedback</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
