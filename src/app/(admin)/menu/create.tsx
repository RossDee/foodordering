import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import Button from '@/src/components/Button'

export default function CreateProductScreen() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [error, setError] = useState('')
  const resetInput = () => {
    setName('')
    setPrice('')
  }
  const onHandleCreate = () => {
    if (valideInput()) return
    console.log({ name, price, error })
    resetInput()
  }

  const valideInput = () => {
    if (!name) {
      setError('Name is required')
      return false
    }
    if (!price) {
      setError('Price is required')
      return false
    }
    if (isNaN(parseFloat(price))) {
      setError('Price is invalid')
      return false
    }
    return true
  }

  return (
    <View>
      <Text style={styles.input}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder='name'
        onChangeText={setName}
      />
      <Text style={styles.input}>Price($)</Text>
      <TextInput
        style={styles.input}
        placeholder='9.99'
        keyboardType='numeric'
        onChangeText={setPrice}
      />
      <Button
        text='Create'
        onPress={onHandleCreate}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  label: {
    color: 'gray',
    fontSize: 18,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
  },
})
