import React from 'react';
import { Pressable, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';



const HomeSplash = () => {
    const [search, onChangeText] = React.useState('Search')

    return(
        <GestureHandlerRootView>
            <ScrollView style={styles.container}>

                <View style={styles.top}>
                    <Text style={styles.topText}>SomeTrails</Text>

                    <View style={styles.searchBox}>
                        <TextInput style={styles.inputBox} value={search} multiline={true} onChangeText={onChangeText}/>
                        <Pressable style={styles.filterButton}><Text style={{color: 'white', fontWeight: 'bold'}}>Filters</Text></Pressable>
                    </View>
                    <View style={{padding: 10}}/>

                    <View style={styles.topButtons}>
                    <View style={{padding: 2}}/>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Distance From Me</Text>
                    </Pressable>

                    <View style={{padding: 2}}/>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Activity Type</Text>
                    </Pressable>

                    <View style={{padding: 2}}/>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Difficulty</Text>
                    </Pressable>

                    <View style={{padding: 2}}/>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Length</Text>
                    </Pressable>
                    </View>

                    <View style={styles.nearbyCards}>

                    <Pressable style={styles.card}>
                        <Text>Test</Text>
                    </Pressable>
                </View>
                <Text style={styles.cardDescText}>Description</Text>
                </View>
            </ScrollView>
        </GestureHandlerRootView>
        )
    }
const styles = StyleSheet.create({
    container: {
    flex: 1,
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
        fontWeight: 'bold',
    },

    card:{
    backgroundColor: 'lightgrey',
    width: '80%',
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
        flex: 0.8,
        color: 'white',
        paddingLeft: 10,

    },

    filterButton: {
        flex: 0.2,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 10,
        alignContent: 'center',
        justifyContent: 'center',
    },

    cardDescText: {
        color: 'white',
    }
});

export default HomeSplash;