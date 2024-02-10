import { View, Text, Platform, FlatList } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import CartItems from '@/src/components/CartItems'
import { useCart } from '@/src/providers/CartProvider'

const CartScreen = () => {
  const { items } = useCart()

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartItems CartItem={item}></CartItems>}
        contentContainerStyle={{ padding: 10, gap: 10 }}
      />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

export default CartScreen
