import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Link, Stack, useLocalSearchParams } from 'expo-router'
import products from '@/src/app/assets/data/products'
import { defaultPizzaImage } from '@/src/components/ProductListItem'
import { PizzaSize } from '@/src/types/types'
import Button from '@/src/components/Button'
import { useCart } from '@/src/providers/CartProvider'
import { FontAwesome } from '@expo/vector-icons'
import Colors from '@/src/constants/Colors'

const pizzaSizes: PizzaSize[] = ['S', 'M', 'L', 'XL']

export default function product() {
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('M') // [1
  const { id } = useLocalSearchParams()
  const { onAddItem } = useCart()
  const product = products.find((p) => p.id.toString() === id)
  const addToCart = () => {
    if (!product) {
      return
    }
    onAddItem(product, selectedSize)
  }

  if (!product) {
    ;<Text>Product not found</Text>
  }
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: product?.name,
          headerRight: () => (
            <Link
              href={`/(admin)/menu/create?id=${id}`}
              asChild
            >
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name='pencil'
                    size={25}
                    color={Colors.light.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Image
        source={{ uri: product?.image || defaultPizzaImage }}
        style={styles.image}
      />
      <Text style={styles.name}>{product?.name}</Text>
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
  image: { width: '100%', aspectRatio: 1, padding: 20 },
  name: { fontSize: 20, fontWeight: 'bold' },
  price: { fontSize: 20, fontWeight: 'bold' },
})
