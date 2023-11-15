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
import { StyleSheet } from 'react-native';
import WeatherToast from './pages/WeatherToast';
import Toast from 'react-native-toast-message';

const Tab = createMaterialTopTabNavigator();


/**App component housing all other pages within a Navigation container */
export default function App() {
  return (
    <NavigationContainer >
      <View style={appStyles.holePunchAvoider} />
      <View style={{ flex: 1 }}>
        <Tab.Navigator style={appStyles.navBar}
          screenOptions={{
            tabBarLabelStyle: { fontSize: smallTextSize, fontWeight: 'bold' },
            tabBarStyle: { backgroundColor: Colours.primary },
          }}>
          <Tab.Screen name="Near You" component={NearYou} />
          <Tab.Screen name="All Trails" component={AllTrails} />
          <Tab.Screen name="Map" component={Map} />
          <Tab.Screen name="Saved" component={Saved} />
        </Tab.Navigator>
        <Toast />
      </View>
    </NavigationContainer>
  )
};

const appStyles = StyleSheet.create({
  holePunchAvoider: {
    flex: 0.06,
    alignContent: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  navBar: {
    flex: 1,
    width: '100%',
    height: '90%',
  },

})