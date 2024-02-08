import { StyleSheet, Image } from 'react-native'
import Colors from '@/src/constants/Colors'

import { Text, View } from '@/src/components/Themed'
import products from '@/src/app/assets/data/products'

type productProps = {
  product: {
    id: string
    title: string
    image: string
    avgRating: number
    ratings: number
    price: number
    oldPrice?: number
  }
}

const ProductListItem = ({ product }: productProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: product.image }}
      />
      <Text style={styles.title}> {product.name} </Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  )
}

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ProductListItem product={products[2]} />
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
