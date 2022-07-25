import { StatusBar } from 'expo-status-bar';
import { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';
import Navigator from './config/Navigator'


import {Text, Bootstrap} from './components'


export default function App():ReactElement {
    


  return (
    <Bootstrap>
      <StatusBar style="auto" />
      <Navigator />
    </Bootstrap>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});