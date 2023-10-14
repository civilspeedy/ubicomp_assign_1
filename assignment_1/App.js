import { NavigationContainer, useNavigation } from '@react-navigation/native';
import HomeSplash from './HomeSplash';
import { View, StyleSheet, Button} from 'react-native';
import Navigation from './Navigation'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator(); // from https://reactnative.dev/docs/navigation

export default function App({navigation}) {
  return (
    <View style={homeStyle.container}> 

      <View style={homeStyle.navBar}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="home" component={HomeSplash}/>
            <Stack.Screen name="Navigation" component={Navigation}/>
          </Stack.Navigator>

          <HomeButton/>
        </NavigationContainer>
        
        
      </View>
    </View>
  )
}


const HomeButton = () =>{
  const navigation = useNavigation();

  return <Button title="home" onPress={() => navigation.navigate('home')}/>
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