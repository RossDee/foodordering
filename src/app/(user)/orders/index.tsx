import { FlatList } from 'react-native'
import React from 'react'
import OrderListItem from '@/src/components/OrderListItem'
import orders from '../../assets/data/orders'
import { Stack } from 'expo-router'
export default function OrderScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Orders' }} />
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
        contentContainerStyle={{ gap: 10, padding: 10 }}
      />
    </>
  )
}
