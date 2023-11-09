import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import AllTrails from './pages/AllTrails';
import Map from './pages/Map';
import Saved from './pages/Saved';
import { Colours, coreStyles } from './styles/styles';
import NearYou from './pages/NearYou';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { smallTextSize } from './styles/styles';


const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <View style={coreStyles.holePunchAvoider} />
      <View style={{ flex: 1 }}>
        <Tab.Navigator style={coreStyles.navBar} 
        screenOptions={{
          tabBarLabelStyle: { fontSize: smallTextSize, fontWeight: 'bold'},
          tabBarStyle: { backgroundColor: Colours.primary },
        }}>
          <Tab.Screen name="Near You" component={NearYou} />
          <Tab.Screen name="All Trails" component={AllTrails} />
          <Tab.Screen name="Map" component={Map} />
          <Tab.Screen name="Saved" component={Saved} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  )
}