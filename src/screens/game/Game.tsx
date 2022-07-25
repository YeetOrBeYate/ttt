import { View, Text } from 'react-native'
import styles from './Game.style'
import React from 'react'

import { StackNavigatorParams } from '../../config/Navigator'

import { RouteProp } from '@react-navigation/native';
import { Gradient } from '../../components/index'

type GameProps = {
  route: RouteProp<StackNavigatorParams, "Game">
}



export default function Game({route}: GameProps) {

  return (
    <Gradient>
      <Text>Here is the Game comp</Text>
    </Gradient>
  )
}