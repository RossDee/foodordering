import { View, Text, Platform, FlatList } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

import { useCart } from '@/src/providers/CartProvider'

const CartScreen = () => {
  const { items } = useCart()

  return (
    <View>
      <Text>cart length:{items.length}</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

export default CartScreen
