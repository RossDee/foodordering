import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@/src/app/assets/data/products'
import { defaultPizzaImage } from '@/src/components/ProductListItem'
import { PizzaSize } from '@/src/types/types'

const pizzaSizes: PizzaSize[] = ['S', 'M', 'L', 'XL']

export default function product() {
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('M') // [1
  const { id } = useLocalSearchParams()
  const product = products.find((p) => p.id.toString() === id)
  if (!product) {
    ;<Text>Product not found</Text>
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image
        source={{ uri: product?.image || defaultPizzaImage }}
        style={styles.image}
      />
      <Text style={styles.name}>{product?.name}</Text>
      <Text>Select Size</Text>
      <View style={[styles.sizeContainer]}>
        {pizzaSizes.map((size) => (
          <Pressable
            onPress={() => setSelectedSize(size)}
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === size ? 'gainsboro' : 'white',
              },
            ]}
            key={size}
          >
            <Text
              style={[
                styles.sizeText,
                {
                  color: selectedSize === size ? 'black' : 'gray',
                },
              ]}
              key={size}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>${product?.price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: { width: '100%', aspectRatio: 1 },
  name: {},
  price: { fontSize: 20, fontWeight: 'bold' },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  size: {
    backgroundColor: 'gainsboro',
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 25,
  },
  sizeText: { fontSize: 20, fontWeight: 'bold' },
})
