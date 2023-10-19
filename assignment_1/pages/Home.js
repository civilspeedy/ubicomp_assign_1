import React from "react";
import { Text, View, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { coreStyles } from "../styles/styles";

const cardData = [{ id: 1, locaton: "London", length: "2 Miles" }];

const Card = ({ content }) => {
  return (
    <View style={coreStyles.card}>
      {content}
    </View>
  );
}


export default function Home() {
  return (
    <GestureHandlerRootView style={coreStyles.gestureHandlerRootView}>
      <Text style={coreStyles.h1}>Trails Near to Me</Text>
      <ScrollView style={coreStyles.scrollView}>
        <Card content=<Text>Hello</Text> />
      </ScrollView>
    </GestureHandlerRootView>
  );
}
