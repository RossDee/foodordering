import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

type productProps = {
  product: {
    id: string
    name: string
    image: string
    price: number
  }
}

const ProductListItem = ({ product }: productProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: product.image }}
      />
      <Text style={styles.title}> {product.name} </Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
})
