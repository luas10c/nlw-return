import React, {useState} from 'react';
import {ArrowLeft} from 'phosphor-react-native';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import {captureScreen} from 'react-native-view-shot';
import fs from 'react-native-fs';
import api from '../../services/api';
import colors from '../../constants/colors';

import ScreenshotButton from '../ScreenshotButton';
import Button from '../Button';

import feedbackTypes from '../../constants/feedbackTypes';

import type {FeedbackType} from '../Widget';

import styles from './styles';

type FormProps = {
  feedbackType: FeedbackType;
  onFeedbackSent: () => void;
  onFeedbackCancel: () => void;
};

const Form = ({feedbackType, onFeedbackSent, onFeedbackCancel}: FormProps) => {
  const [description, setDescription] = useState('');
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTakeScreenshot = async () => {
    try {
      const image = await captureScreen({
        format: 'jpg',
        quality: 0.8,
      });
      setScreenshot(image);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveScreenshot = () => {
    setScreenshot(null);
  };

  const handleSendFeedback = async () => {
    if (loading) {
      return;
    }

    setLoading(true);
    const screenshotBase64 =
      screenshot &&
      `data:image/png;base64,${await fs.readFile(screenshot, 'base64')}`;

    try {
      await api.post('feedbacks', {
        type: feedbackType,
        description,
        screenshot: screenshotBase64,
      });
      onFeedbackSent();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const {title, image} = feedbackTypes[feedbackType];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackCancel}>
          <ArrowLeft size={24} weight="bold" color={colors.text_secondary} />
        </TouchableOpacity>
        <View style={styles.title_container}>
          <Image source={image} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      <TextInput
        style={styles.textarea}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={colors.text_secondary}
        onChangeText={text => setDescription(text)}
        autoCorrect={false}
        multiline
      />

      <View style={styles.footer}>
        <ScreenshotButton
          screenshot={screenshot}
          onTakeScreenshot={handleTakeScreenshot}
          onRemoveScreenshot={handleRemoveScreenshot}
        />
        <Button
          onPress={handleSendFeedback}
          isLoading={loading}
          disabled={!screenshot}
        />
      </View>
    </View>
  );
};

export default Form;
