import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps
} from 'react-native'

interface buttonProps extends TouchableOpacityProps {
  title: string
}

export function Button({ title, ...rest }: buttonProps) {
  return (
    <TouchableOpacity
      style={style.button}
      {...rest}
    >
      <Text style={style.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: '#A370F7',
    marginTop: 20,
    borderRadius: 7,
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
  }
})
