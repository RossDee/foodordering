import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function product() {
  const { id } = useLocalSearchParams()
  return (
    <View>
      <Text style={{ fontSize: 30 }}>product detail scren for id :{id}</Text>
    </View>
  )
}
