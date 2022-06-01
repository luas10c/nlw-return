import React, {useState, useRef} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {ChatTeardropDots} from 'phosphor-react-native';
import {Modalize} from 'react-native-modalize';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import feedbackTypes from '../../constants/feedbackTypes';

import Options from '../Options';
import Form from '../Form';
import Success from '../Success';

import colors from '../../constants/colors';

import styles from './styles';

export type FeedbackType = keyof typeof feedbackTypes;

const Widget = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackStatus, setFeedbackStatus] = useState<string | null>(null);
  const modalizeRef = useRef<Modalize>(null);

  const handleOpen = () => {
    modalizeRef.current?.open();
  };

  const handleFeedbackRestart = () => {
    setFeedbackType(null);
    setFeedbackStatus(null);
  };

  const handleFeedbackSent = () => {
    setFeedbackStatus('sent');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots size={24} color={colors.text_on_brand_color} />
      </TouchableOpacity>
      <Modalize
        ref={modalizeRef}
        snapPoint={280}
        modalStyle={styles.modal}
        handleStyle={styles.indicator}>
        {feedbackStatus === 'sent' ? (
          <Success onSendAnotherFeedback={handleFeedbackRestart} />
        ) : feedbackType ? (
          <Form
            feedbackType="BUG"
            onFeedbackCancel={handleFeedbackRestart}
            onFeedbackSent={handleFeedbackSent}
          />
        ) : (
          <Options onFeedbackChange={value => setFeedbackType(value)} />
        )}
      </Modalize>
    </View>
  );
};

export default gestureHandlerRootHOC(Widget);
