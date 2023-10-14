import { Button, Pressable, StyleSheet, Text, View } from 'react-native';


const HomeSplash = ({navigation}) => (
    <View style={styles.container}>

        <View style={styles.top}>
            <Text style={styles.topText}>SomeTrails</Text>

            <View style={styles.topButtons}>
            <Pressable style={styles.button}>
                <Text>Distance From Me</Text>
            </Pressable>
            <Pressable style={styles.button}>
                <Text>Activity Type</Text>
            </Pressable>
            </View>

            <View style={styles.nearbyCards}>

            <View style={styles.card}>
                <Text>Test</Text>
            </View>
            </View>
        </View>
    </View>
)

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
    borderRadius: 8,
    backgroundColor: 'lightgreen',
    alignContent: 'center',
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

});

export default HomeSplash;