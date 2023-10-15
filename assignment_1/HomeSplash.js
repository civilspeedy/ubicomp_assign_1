import React from 'react';
import { Pressable, StyleSheet, Text, View, ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const HomeSplash = () => (
    <ScrollView style={styles.container}>

        <View style={styles.top}>
            <Text style={styles.topText}>SomeTrails</Text>

            <TextInput value={search}></TextInput>

            <View style={styles.topButtons}>
            <View style={{flex: 0.1}}/>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Distance From Me</Text>
            </Pressable>

            <View style={{flex: 0.1}}/>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Activity Type</Text>
            </Pressable>

            <View style={{flex: 0.1}}/>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Difficulty</Text>
            </Pressable>

            <View style={{flex: 0.1}}/>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Length</Text>
            </Pressable>
            </View>

            <View style={styles.nearbyCards}>

            <View style={styles.card}>
                <Text>Test</Text>
            </View>
        </View>
        </View>
    </ScrollView>
)

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#333',
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
    padding: 5,
    },

    buttonText:{
        fontWeight: 'bold'
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