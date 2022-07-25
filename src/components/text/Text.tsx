import { Text as NativeText, TextProps as NativeTextProps } from 'react-native'
import React, {ReactElement} from 'react'

type TextProps = {
    weight: '300' | '400' | '500' | '700' 
} & NativeTextProps

const Text = ({children, style, weight, ...props}: TextProps): ReactElement => {
    let fontType 

    switch(weight) {
        case '300':
            fontType = 'Ubuntu_300Light'
            break;
        case '400':
            fontType = 'Ubuntu_400Regular'
            break;
        case '500':
            fontType = 'Ubuntu_500Medium'
            break;
        case '700':
            fontType = 'Ubuntu_700Bold'
            break;
        default:
            fontType = 'Ubuntu_400Regular'
      }

  return (
      <NativeText {...props} style={style ? [{fontFamily: fontType}, style]: {fontFamily: fontType}}>{children}</NativeText>
  )
}

export default Text