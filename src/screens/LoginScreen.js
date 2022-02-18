import { Box, Center, Image, Text } from 'native-base'
import React from 'react'
import { TouchableOpacity, useColorScheme } from 'react-native'
import LoginForm from '../components/forms/LoginForm'
import { loginUser, useAuth } from '../contexts/AuthContext'
import Images from '../images/Images'

function LoginScreen ({ navigation }) {
  const isDarkMode = useColorScheme() === 'dark'

  // Context pour récupérer les infos de connexion
  const { dispatch } = useAuth()
  const handleLogin = () => {
    loginUser({}, dispatch)
  }

  return (
    <Box>
      <Center>
        <Image source={isDarkMode ? Images.logoLight : Images.logoDark} size='2xl' resizeMode='contain' alt='logo' />
        <LoginForm onLogin={handleLogin} />
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text>Pas de compte ?</Text>
        </TouchableOpacity>
      </Center>
    </Box>
  )
}

export default LoginScreen
