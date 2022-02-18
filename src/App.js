import React from 'react'
import { NativeBaseProvider } from 'native-base'
import {
  StatusBar,
  useColorScheme
} from 'react-native'

import Navigator from './navigation/Navigator'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './contexts/AuthContext'
import { getTheme } from './theme/Theme'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const theme = getTheme(isDarkMode)

  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: isDarkMode ? '#0F172A' : '#fff'
    }
  }

  return (
    <AuthProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer theme={navigationTheme}>
        <NativeBaseProvider theme={theme}>
          <Navigator />
        </NativeBaseProvider>
      </NavigationContainer>
    </AuthProvider>
  )
}

export default App
