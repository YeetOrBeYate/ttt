import React, { ReactElement, ReactNode } from 'react'
import { NavigationContainer, NavigationContainerProps } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, SinglePlayerGame } from '../screens/index';


export type StackNavigatorParams = {
    Home: undefined,
    SinglePlayerGame: {gameId: string}
}

const Stack = createNativeStackNavigator<StackNavigatorParams>();

const Navigator = (): ReactElement => { 

    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: true, headerBackVisible: true }}>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='SinglePlayerGame' component={SinglePlayerGame}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator