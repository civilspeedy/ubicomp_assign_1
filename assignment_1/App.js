import { NavigationContainer } from '@react-navigation/native';
import HomeSplash from './HomeSplash';
import { View, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from './Navigation'

//ChatGPT was asked for basic code for a 'bottom nav bar', fragments from responce will be highlighted

const Tab = createBottomTabNavigator() // from ChatGPT

export default function App() {
  return (
    <View style={homeStyle.container}> 

      <View style={homeStyle.navBar}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeSplash}/>
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </View>
  )
}

const homeStyle= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    },
  navBar: {
    flexDirection: 'row',
    backgroundColor: 'lightgreen',
    },
})