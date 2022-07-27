import { View, Text } from 'react-native'
import styles from './Single-Player-Game.style'
import React from 'react'

import { StackNavigatorParams } from '../../config/Navigator'

import { RouteProp } from '@react-navigation/native';
import { Gradient, Board } from '../../components/index'

import { printFomatedBoard, BoardState, isEmpty, isFull, getAvailableMoves } from '../../utils'

type GameProps = {
  route: RouteProp<StackNavigatorParams, "SinglePlayerGame">
}



export default function Game({route}: GameProps) {

  const thing: BoardState = ['o', 'o', 'x', 'x', 'o', null, 'x', 'o', null]
  printFomatedBoard(thing)
  console.log('<<<<Empty',isEmpty(thing))
  console.log('<<<<<Full?',isFull(thing))
  console.log('>>>get', getAvailableMoves(thing))

  return (
    <Gradient>
      <Text>Here is the Game comp</Text>
      <Board 
        state={['o', 'o', 'x', 'x', 'o', null, 'x', 'o', null]}
        size={300}
        onCellPressed={(index: any) => alert(index)}
      />
    </Gradient>
  )
}