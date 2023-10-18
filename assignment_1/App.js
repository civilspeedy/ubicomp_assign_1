import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Home from './pages/Home';
import Map from './pages/Map';
import Saved from './pages/Saved';
import Settings from './pages/Settings';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <View style={styles.holePunchAvoider}/>
      
      <Tab.Navigator style={styles.navBar}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Map" component={Map}/>
        <Tab.Screen name="Saved" component={Saved}/>
        <Tab.Screen name="Settings" component={Settings}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },

    holePunchAvoider: {
      flex: 0.05,
      alignContent: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
    },

    navBar: {
      flex: 0.95,
      width: '100%',
      height: '90%',
    }
})