import { Box, Center, Image, Text } from "native-base";
import React from 'react';
import LoginForm from "../components/forms/LoginForm";
import Images from "../images/Images";

function AuthScreen() {
  return (
    <Box style={{ height: 500 }}>
      <Center>
        <Image source={Images.logoLight} size='2xl' resizeMode="contain" alt="logo" />
        <LoginForm />
      </Center>
    </Box>
  )
}

export default AuthScreen