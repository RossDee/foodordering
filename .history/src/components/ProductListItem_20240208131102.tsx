import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'
import { Product } from '@/src/types/types'

type ProductListItmesProps = {
  product: Product
}

export const defaultPizzaImage =
  'https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg'

const ProductListItem = ({ product }: ProductListItmesProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: product.image || defaultPizzaImage }}
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
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
})

export default ProductListItem
