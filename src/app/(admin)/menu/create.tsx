import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import Button from '@/src/components/Button'
import { defaultPizzaImage } from '@/src/components/ProductListItem'
import Colors from '@/src/constants/Colors'
import * as ImagePicker from 'expo-image-picker'

export default function CreateProductScreen() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [error, setError] = useState('')
  const [image, setImage] = useState<string | null>(null)
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1, // 0-1
    })

    console.log(result)

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

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
    setError('')
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
    <View style={styles.container}>
      <Image
        source={{ uri: image || defaultPizzaImage }}
        style={styles.image}
      />
      <Text
        style={styles.textButton}
        onPress={pickImage}
      >
        select image
      </Text>
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
      <Text style={styles.error}>{error}</Text>
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
  error: {
    color: 'red',
  },
  image: {
    width: '50%',
    aspectRatio: 1,
    marginBottom: 20,
    alignSelf: 'center',
  },
  textButton: {
    color: Colors.light.tint,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 10,
  },
})
