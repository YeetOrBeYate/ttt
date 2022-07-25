import { Image, View } from 'react-native'
import React, { ReactElement } from 'react'
import { StackNavigatorParams } from '../../config/Navigator'


import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Gradient } from "../../components/index"

import styles from './Home.styles'
import { Text, Button } from "../../components/index"



type HomeProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParams, "Home">
}

export default function Home({navigation}: HomeProps): ReactElement {
  return (
    <Gradient>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../../assets/typescript_image.png')} />
        <View style={styles.buttonContainer}>
          <Button onPress={() => navigation.navigate("Game" ,{gameId: 'fund'})}>
            <Text weight='400'>Game button</Text>
          </Button>
          <Button>
            <Text weight='400'>Multi-player</Text>
          </Button>
          <Button>
            <Text weight='400'>Login</Text>
          </Button>
          <Button>
            <Text weight='400'>Settings</Text>
          </Button>
        </View>
      </View>
    </Gradient>
  )
}