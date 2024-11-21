import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefualt();
    setEmail("");
    setPassword("");


  }

  return (
   <SafeAreaView>
    <View>
      <Text>Login</Text>
      <View>
        <TextInput placeholder='Email' value={email} onChangeText={(text) => setEmail(text)} />
      </View>
      <View>
        <TextInput placeholder='Password' value={password} onChangeText={(text) => setPassword(text)} />
      </View>
      <Button title='Login' type="submit" />
    </View>
   </SafeAreaView>
  )
}

export default Login