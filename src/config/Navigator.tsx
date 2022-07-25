import React, { ReactElement, ReactNode } from 'react'
import { NavigationContainer, NavigationContainerProps } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Game } from '../screens/index';


export type StackNavigatorParams = {
    Home: undefined,
    Game: {gameId: string}
}

const Stack = createNativeStackNavigator<StackNavigatorParams>();

const Navigator = (): ReactElement => {

    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: true, headerBackVisible: true }}>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Game' component={Game}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator