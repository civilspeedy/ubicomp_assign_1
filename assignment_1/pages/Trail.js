import React from "react"
import { View } from "react-native"

export default function Trail(trail){
    return (
        <View>
            <Text>{trail.name}</Text>
        </View>
    )
}