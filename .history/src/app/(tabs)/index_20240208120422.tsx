import { StyleSheet, Image } from 'react-native'
import Colors from '@/src/constants/Colors'
import EditScreenInfo from '@/src/components/EditScreenInfo'
import { Text, View } from '@/src/components/Themed'
import products from '@/src/app/assets/data/products'
const product = products[2]

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 200, height: 200 }}
        source={{ uri: product.image }}
      />
      <Text style={styles.title}> {product.name} </Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
})
