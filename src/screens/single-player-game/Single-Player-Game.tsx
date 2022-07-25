import { View, Text } from 'react-native'
import styles from './Single-Player-Game.style'
import React from 'react'

import { StackNavigatorParams } from '../../config/Navigator'

import { RouteProp } from '@react-navigation/native';
import { Gradient, Board } from '../../components/index'

type GameProps = {
  route: RouteProp<StackNavigatorParams, "SinglePlayerGame">
}



export default function Game({route}: GameProps) {

  return (
    <Gradient>
      <Text>Here is the Game comp</Text>
      <Board 
      state={['x', null, 'x', 'o', null, 'o', 'x', null, 'x']}
      size={300}
      onCellPressed={(index: any) => alert(index)}
      />
    </Gradient>
  )
}