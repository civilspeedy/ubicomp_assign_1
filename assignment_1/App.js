import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <Text style={styles.topText}>SomeTrails</Text>

        <View style={styles.topButtons}>
          <Button title="Distance From Me" style={styles.button}/>
          <Button title="activity" style={styles.button}/>
        </View>

        <View style={styles.nearbyCards}>

          <View style={styles.card}>
            <Text>Test</Text>
          </View>
        </View>

        <View style={styles.navBar}>
          <Button title="test"/>
          <Button title="test"/>
          <Button title="test"/>
          <Button title="test"/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },

  top:{
    flex: 1,
    alignContent: 'stretch',
    alignItems: 'center'
  },

  topText:{
    fontWeight: 'bold',
    fontSize: 30,
    color: 'lightgreen',
    paddingTop: 50,
    paddingBottom: 20,
  },
  
  topButtons:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
  },

  button:{
    paddingLeft: 10,
    borderRadius: 10,
  },

  card:{
    backgroundColor: 'lightgrey',
    width: 300,
    height:200,
    borderRadius: 10,
  },

  nearbyCards:{
    padding: 20,
    flexDirection: "row",
  },

  navBar: {
    flexDirection: "row",
  }
});
