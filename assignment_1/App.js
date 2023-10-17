import React from 'react';
import { View, Text, StyleSheet} from 'react-native';


export default function App({navigation}) {
  return (
    <View style={homeStyle.container}>
      <Text style={{color:'white'}}>Hello</Text>
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