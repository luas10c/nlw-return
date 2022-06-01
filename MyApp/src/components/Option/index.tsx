import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageProps,
} from 'react-native';

import styles from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  image: ImageProps;
}

const Option = ({title, image, ...rest}: Props) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Option;