import { StyleSheet } from 'react-native'
import Colors from '@/src/constants/Colors'

import { View } from '@/src/components/Themed'
import products from '@/src/app/assets/data/products'
import ProductListitem from '@/components/ProductListItem'

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <ProductListitem product={products[2]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
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
  image: {
    width: '100%',
    aspectRatio: 1,
  },
})
