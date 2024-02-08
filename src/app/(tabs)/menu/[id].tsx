import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

export default function product() {
  const { id } = useLocalSearchParams()
  return (
    <View>
      <Stack.Screen options={{ title: 'Details' + id }} />
      <Text style={{ fontSize: 30 }}>product detail scren for id :{id}</Text>
    </View>
  )
}
