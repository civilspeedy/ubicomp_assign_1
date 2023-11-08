import React, { useState } from "react";
import { View } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { coreStyles } from "../styles/styles";
import Trail from "./subPages/Trail";
import Filters from "./subPages/Filters";
import { filterJson } from "../store";
import { StyleSheet } from "react-native";
import Search from "./subPages/Search";

const cardData = require("../json/trail_data.json"); //dummy data generated by chatGPT
let trailArray = [];

/**Applies filters in filters object and returns array*/
const filterApply = () => {

  let easyArray = [];
  let medArray = [];
  let hardArray = [];

  for (let i = 0; i < cardData.length; i++) {
    const item = cardData[i];


    if (item.distanceFromUser <= filterJson.maxDistanceFromUser) {
      if (item.difficulty == 'E') {
        easyArray.push(item);
      } else if (item.difficulty == 'M') {
        medArray.push(item);
      } else if (item.difficulty == 'H') {
        hardArray.push(item);
      }
    }
  }

  if (filterJson.easy) {
    easyArray.forEach((item) => {
      trailArray.push(item);
    });
  }
  if (filterJson.medium) {
    medArray.forEach((item) => {
      trailArray.push(item);
    });
  }
  if (filterJson.hard) {
    hardArray.forEach((item) => {
      trailArray.push(item);
    });
  }
}

filterApply();
export const TrailList = () => {
  const [trails, filterApply] = useState(trailArray); // need this set up for auto update

  return (
    <ScrollView style={allTrailsStyles.trailList}>
      {trailArray.map((trail, index) => ( //chatGPT was asked 'How to implament a foor loop into jsx?'
        <Trail key={index} trail={trail} />
      ))}
    </ScrollView>
  )
}

export default function AllTrails() {
  return (
    <GestureHandlerRootView style={coreStyles.gestureHandlerRootView}>
      <TrailList />
      <View style={allTrailsStyles.bottomRow}>
        <Filters />
        <Search />
      </View>


    </GestureHandlerRootView>
  );
}

const allTrailsStyles = StyleSheet.create({
  homeTop: {
    flex: 0.09,
    margin: 10,
  },

  trailList: {
    flex: 0.91,
    borderRadius: 10,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
});