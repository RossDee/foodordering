import React from 'react'
import { View, Image, Text, StyleSheet, Pressable } from 'react-native'
import Colors from '../constants/Colors'
import { Product } from '@/src/types/types'
import { Link, useSegments } from 'expo-router'

type ProductListItmesProps = {
  product: Product
}

export const defaultPizzaImage =
  'https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg'

const ProductListItem = ({ product }: ProductListItmesProps) => {
  const segments = useSegments()
  // console.log('segments', segments)
  return (
    <Link
      href={`/${segments[0]}/menu/${product.id}`}
      asChild
    >
      <Pressable style={styles.container}>
        <Image
          style={styles.image}
          resizeMode='contain'
          source={{ uri: product.image || defaultPizzaImage }}
        />
        <Text style={styles.title}> {product.name} </Text>
        <Text style={styles.price}>{product.price}</Text>
      </Pressable>
    </Link>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderRadius: 20,
    top: 10,
    backgroundColor: 'white',
    maxWidth: '50%',
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
