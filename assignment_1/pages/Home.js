import React from "react"; 
import { Text, View, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";

const cardData = [
    {id: 1, locaton: "London", length: "2 Miles"}
]

function generateCards(){
    for (const card in cardData){
        
    }
}


export default function Home(){
    return (
        <GestureHandlerRootView>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.card}/>
                </ScrollView>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    safeAreaView:{
        flex:1,
    },

    card:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'grey',
    }
})