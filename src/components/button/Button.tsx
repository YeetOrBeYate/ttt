import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React, { ReactNode } from 'react'

import styles from './Button.styles'

type ButtonProps = {
    children: ReactNode
} & TouchableOpacityProps

export default function Button({children, style, ...props}: ButtonProps) {
  return (
    <TouchableOpacity {...props} style={[styles.button, style]}>
      {children}
    </TouchableOpacity>
  )
}