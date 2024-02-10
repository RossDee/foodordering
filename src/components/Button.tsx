import { Pressable, StyleSheet, Text, View } from 'react-native'
import Colors from '@/src/constants/Colors'
import { forwardRef } from 'react'

type ButtonProps = {
  text: string
} & React.ComponentPropsWithoutRef<typeof Pressable>

const Button = forwardRef<View | null, ButtonProps>(
  ({ text, ...pressableProps }, ref) => {
    return (
      <Pressable
        ref={ref}
        {...pressableProps}
        style={styles.container}
      >
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    )
  }
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.tint,
    padding: 15,
    alignItems: 'center',
    borderRadius: 100,
    marginVertical: 10,
    width: '80%',
    marginBottom: 'auto',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
})

export default Button
