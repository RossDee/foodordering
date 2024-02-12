import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import Button from '@/src/components/Button'
import Colors from '@/src/constants/Colors'
import { Link, Stack } from 'expo-router'

export default function signInScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleOnSignIn = () => {
    // to do
    console.log('Sign in clicked')
  }

  const handleOnCreateAccount = () => {
    //todo
    console.log('Create account clicked')
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Sign in' }} />
      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        style={styles.input}
        placeholder='email'
        onChangeText={setEmail}
      />

      <View>
        <Text style={styles.label}>Password</Text>
        <TextInput
          value={password}
          style={styles.input}
          placeholder='password'
          onChange={(e) => setPassword(e.nativeEvent.text)}
        />
      </View>
      <Button
        text='Sign in'
        onPress={handleOnSignIn}
      />
      <Link
        style={styles.textButton}
        href='/(auth)/sign-up'
      >
        Create an account
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    color: 'gray',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  textButton: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.light.tint,
    marginVertical: 10,
  },
})
