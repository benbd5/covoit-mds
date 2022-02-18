import React, { useState } from "react";
import { Box, Button, FormControl, Input, WarningOutlineIcon } from "native-base";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Box>
      <FormControl>
        <FormControl.Label>Email</FormControl.Label>
        <Input placeholder="contact@mds.org" />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon />}>
          Une erreur s'est produite
        </FormControl.ErrorMessage>
      </FormControl>
      <FormControl>
        <FormControl.Label>Mot de passe</FormControl.Label>
        <Input
          type={showPassword ? 'text' : 'password'}
          InputRightElement={
            <Button
              size='xs'
              rounded='none'
              w='1/6'
              h='full'
              onPress={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </Button>
          }
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon />}>
          Une erreur s'est produite
        </FormControl.ErrorMessage>
      </FormControl>
    </Box>
  )
}

export default LoginForm