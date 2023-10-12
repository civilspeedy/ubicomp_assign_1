import HomeSplash from './HomeSplash';
import { View, StyleSheet, Pressable, Text} from 'react-native';

export default function App() {
  return (
    <View style={homeStyle.container}> 
      <HomeSplash/>
      <View style={homeStyle.navBar}>
        <Pressable><Text>Test</Text></Pressable>
        <Pressable><Text>Test</Text></Pressable>
        <Pressable><Text>Test</Text></Pressable>
        <Pressable><Text>Test</Text></Pressable>
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
    }
})