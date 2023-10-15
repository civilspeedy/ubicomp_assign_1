import React from 'react';
import { Pressable, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';


const search = ""

const HomeSplash = () => (
    <GestureHandlerRootView>
        <ScrollView style={styles.container}>

            <View style={styles.top}>
                <Text style={styles.topText}>SomeTrails</Text>

                <View style={styles.searchBox}>
                    <TextInput style={styles.inputBox} value={search} multiline={true}/>
                    <Pressable><Image source={"C:/Users/Charl/Documents/ubicomp_assignment/ubicomp_assign_1/assignment_1/assets/cog.png"}/></Pressable>
                </View>
                <View style={{padding: 10}}/>

                <View style={styles.topButtons}>
                <View style={{padding: 1}}/>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Distance From Me</Text>
                </Pressable>

                <View style={{padding: 1}}/>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Activity Type</Text>
                </Pressable>

                <View style={{padding: 1}}/>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Difficulty</Text>
                </Pressable>

                <View style={{padding: 1}}/>
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
    </GestureHandlerRootView>
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
    paddingBottom: 10,
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

    searchBox:{
        flex: 1,
        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 10,
        width: '75%',
        flexDirection: 'row',
    },

    inputBox: {
        width: '90%',
    }


});

export default HomeSplash;