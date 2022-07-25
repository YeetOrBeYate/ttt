import { View, TouchableOpacity } from 'react-native'
import React, {ReactElement} from 'react'
import Text from '../text/Text'
import styles from './Board.styles'

type Cell = 'x' | 'o' | null;
type BoardProps = {
    state: [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell];
    size: number;
    onCellPressed?: (index: number) => void
}

export default function Board({state, size, onCellPressed}: BoardProps) : ReactElement {
  return (
    <View style={[styles().container,{
        width: size,
        height: size,
        backgroundColor: 'green'
    }]}>
        {state.map((cell, index)=>(
            <TouchableOpacity 
            style={styles().cell} 
            key={index}
            onPress={() => onCellPressed && onCellPressed(index)}
            >
                <Text weight='400' style={styles(size/6).cellText}>{cell}</Text>
            </TouchableOpacity>
        ))}
      <Text weight='400'>Board</Text>
    </View>
  )
}

