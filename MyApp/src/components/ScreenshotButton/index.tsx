import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Camera, Trash} from 'phosphor-react-native';
import colors from '../../constants/colors';

import styles from './styles';

type Props = {
  screenshot: string | null;
  onTakeScreenshot: () => void;
  onRemoveScreenshot: () => void;
};

const ScreenshotButton = ({
  screenshot,
  onTakeScreenshot,
  onRemoveScreenshot,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={screenshot ? onRemoveScreenshot : onTakeScreenshot}
      style={styles.container}>
      {screenshot ? (
        <View>
          <Image source={{uri: screenshot}} style={styles.screenshot} />
          <Trash
            size={22}
            color={colors.text_secondary}
            weight="fill"
            style={styles.removeIcon}
          />
        </View>
      ) : (
        <Camera size={24} color={colors.text_secondary} weight="bold" />
      )}
    </TouchableOpacity>
  );
};

export default ScreenshotButton;
