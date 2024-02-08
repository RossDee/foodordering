import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

type productProps = {
  product: {
    id: string
    title: string
    image: string
    avgRating: number
    ratings: number
    price: number
    oldPrice?: number
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
