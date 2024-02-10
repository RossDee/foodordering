import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { CartItem } from '../types/types'
import { useCart } from '../providers/CartProvider'
import { defaultPizzaImage } from './ProductListItem'
import { FontAwesome } from '@expo/vector-icons'
import Colors from '../constants/Colors'

type CartItemsProps = {
  CartItem: CartItem
}

export default function CartItems({ CartItem }: CartItemsProps) {
  const { onUodateQuantity } = useCart()
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: CartItem.product.image || defaultPizzaImage }}
        style={styles.image}
        resizeMode='contain'
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{CartItem.product.name}</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.price}>${CartItem.product.price}</Text>
          <Text>{CartItem.size}</Text>
        </View>
      </View>
      <View style={styles.quantitySelector}>
        <Pressable onPress={() => onUodateQuantity(CartItem.id, -1)}>
          <FontAwesome
            name='minus'
            size={20}
            color={Colors.light.tint}
            style={{ padding: 5 }}
          />
        </Pressable>
        <Text style={styles.quantity}>{CartItem.quantity}</Text>
        <Pressable onPress={() => onUodateQuantity(CartItem.id, 1)}>
          <FontAwesome
            name='plus'
            size={20}
            color={Colors.light.tint}
            style={{ padding: 5 }}
          />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    flex: 1,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  image: {
    width: 75,
    height: 75,
    alignSelf: 'center',
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  subtitleContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  quantitySelector: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
})
