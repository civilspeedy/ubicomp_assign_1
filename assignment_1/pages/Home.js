import React from "react";
import { Text, View, StyleSheet, Dimensions, SafeAreaView, Button, Pressable } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { coreStyles } from "../styles/styles";

const cardData = require("../json/trail_data.json"); //dummy data generated by chatGPT

const Card = ({ content }) => {
  return (
    <View>
      <View style={coreStyles.card}>
        <Text style={coreStyles.cardHeader}>{content.name}</Text>

        <View style={coreStyles.cardStats}>
          <Text><Text style={{ fontWeight: 'bold' }}>Distance: </Text>{content.distance} |</Text>
          <Text> <Text style={{ fontWeight: 'bold' }}>Difficulty:</Text> {content.difficulty} |</Text>
          <Text> <Text style={{ fontWeight: 'bold' }}>Distance From You: </Text></Text>
        </View>

        <Text style={coreStyles.cardDesc}>{content.description}</Text>
      </View>

      <View style={{ padding: 10 }} />
    </View>
  );
}



export default function Home() {
  const [seeModal, setModal] = useState(false);// from https://stackoverflow.com/questions/68350980/react-native-floating-or-popup-screen-question


  return (
    <GestureHandlerRootView style={coreStyles.gestureHandlerRootView}>

      <View style={coreStyles.homeTop}>
        <Text style={coreStyles.h1}>Trails Near You</Text>
        <View style={{ padding: 10 }} />
        <Pressable style={coreStyles.distButton}>
          <Text>Max Distance</Text>
        </Pressable>
      </View>

      <ScrollView style={coreStyles.scrollView}>
        {cardData.trails.map((trail, index) => ( //chatGPT was asked 'How to implament a foor loop into jsx?'
          <Card key={index} content={trail} />
        ))}
      </ScrollView>
    </GestureHandlerRootView>
  );
}
