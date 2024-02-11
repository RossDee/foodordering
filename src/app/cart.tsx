import { View, Text, Platform, FlatList } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import CartItems from '@/src/components/CartItems'
import { useCart } from '@/src/providers/CartProvider'
import Button from '@/src/components/Button'
const CartScreen = () => {
  const { items, totalPrice } = useCart()

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartItems CartItem={item}></CartItems>}
        contentContainerStyle={{ padding: 10, gap: 10 }}
      />
      <View style={{ alignContent: 'center', alignItems: 'center' }}>
        <Text style={{ marginTop: 10, fontWeight: '500' }}>${totalPrice}</Text>

        <Button text='check out' />
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

export default CartScreen
