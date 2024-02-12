import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import * as dayjs from 'dayjs'
import { Order } from '@/src/types/types'

type OrderListProps = {
  order: Order
}
const OrderListItem = ({ order }: OrderListProps) => {
  return (
    <View>
      <Text>OrderListItem</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: { fontWeight: 'bold', marginVertical: 5 },
  time: { color: 'gray', fontSize: 12 },
  status: { fontWeight: '500' },
})

export default OrderListItem
