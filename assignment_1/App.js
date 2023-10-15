import React from 'react';
import HomeSplash from './HomeSplash';
import { View, StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator(); // from https://reactnative.dev/docs/navigation

export default function App({navigation}) {
  return (
    <View style={homeStyle.container}> 
      <HomeSplash/>
    </View>
  )
}


const homeStyle= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    },
  navBar: {
    flexDirection: 'row',
    backgroundColor: 'lightgreen',
    },
})