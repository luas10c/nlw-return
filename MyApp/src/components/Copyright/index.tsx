import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const Copyright = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.copyright_text}>Feito com {'❤'} pela Rockeseat</Text>
    </View>
  );
};

export default Copyright;
