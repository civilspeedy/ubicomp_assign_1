import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Home from './pages/Home';
import Map from './pages/Map';
import Saved from './pages/Saved';
import Settings from './pages/Settings';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={homeStyle.container}>
      <View style={{flex:0.1}}/>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Map" component={Map}/>
        <Tab.Screen name="Saved" component={Saved}/>
        <Tab.Screen name="Settings" component={Settings}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}


const homeStyle= StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    }
})