import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import Home from './pages/Home';
import Map from './pages/Map';
import Saved from './pages/Saved';
import Settings from './pages/Settings';

import { coreStyles } from './styles/styles';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={coreStyles.mainStyle}>
      <View style={coreStyles.holePunchAvoider} />

      <Tab.Navigator style={coreStyles.navBar}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Saved" component={Saved} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}