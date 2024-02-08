import { StyleSheet, View } from 'react-native'
import products from '@/src/app/assets/data/products'
import ProductListitem from '@/src/components/ProductListItem'

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <ProductListitem product={products[2]} />
    </View>
  )
}
