import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Order } from '@/src/types/types'
import { Link, useSegments } from 'expo-router'
import { ThumbnailOverlayTimeStatus } from 'youtubei.js/dist/src/parser/nodes'
dayjs.extend(relativeTime)

type OrderListProps = {
  order: Order
}

const OrderListItem = ({ order }: OrderListProps) => {
  const segments = useSegments()
  return (
    <Link
      href={`/${segments[0]}/orders/${order.id}`}
      asChild
    >
      <Pressable style={styles.container}>
        <View>
          <Text style={styles.title}>Order#{order.id}</Text>
          <Text style={styles.time}>{dayjs(order.created_at).fromNow()}</Text>
        </View>
        <Text style={styles.status}>{order.status}</Text>
      </Pressable>
    </Link>
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
