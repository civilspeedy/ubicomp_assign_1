import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { coreStyles } from "../styles/styles";
import Trail from "./subPages/Trail";
import Filters from "./subPages/Filters";
import { filterJson } from "../store";
import { StyleSheet } from "react-native";
import Search from "./subPages/Search";

const trailList = require("../json/trail_data.json"); //dummy data generated by chatGPT

export default function AllTrails() {
  const [filters, setFilters] = useState([]);
  const updateFilters = (newFilters) => (setTrails(newFilters), applyFilters(newFilters))
  /*so what I'm doing here is having a use state for the filters wich will apply new filters to the filters json
  and at the same time call the function to apply these filters to the trail list*/


  return (
    <GestureHandlerRootView style={coreStyles.gestureHandlerRootView}>
      <View style={allTrailsStyles.bottomRow}>
        <Filters />
        <Search />
      </View>
    </GestureHandlerRootView>
  );
};


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