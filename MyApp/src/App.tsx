import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, KeyboardAvoidingView, StatusBar} from 'react-native';
import colors from './constants/colors';

import Widget from './components/Widget';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Widget />
    </SafeAreaView>
  );
};

export default App;
