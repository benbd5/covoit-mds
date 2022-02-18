import React from 'react';
import { NativeBaseProvider } from 'native-base';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import AuthScreen from './screens/AuthScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NativeBaseProvider>
        <AuthScreen />
      </NativeBaseProvider>
    </SafeAreaView>
  );
};

export default App;
