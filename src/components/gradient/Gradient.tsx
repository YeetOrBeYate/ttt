import { View } from 'react-native'
import styles from './Gradient.style'
import React, { ReactNode, ReactElement } from 'react'
import { LinearGradient } from 'expo-linear-gradient';

type GradientProps = {
    children: ReactNode
}


export default function Gradient({children}: GradientProps): ReactElement {
  return (
    <View style={styles.container}>
        <LinearGradient
        colors={['#2A000B', '#420011', '#99334D', '#CA97A4']}
        style={styles.gradient}/>
        {/* <Text>Here is the home comp</Text>
        <Button title='Game' onPress={() => navigation.navigate("Game" ,{gameId: 'fund'})}/> */}
        {children}
  </View>
  )
}