import React from "react"; 
import { Text, View, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

const carouselCards = [
    {id: 1, name: "nearby"},
    {id: 2, name: "nearby"},
    {id: 3, name: "nearby"},
]

const sliderWidth = Dimensions.get("window").width + 30;
const cardWidth = Math.round(sliderWidth * 0.8);

const renderItem = ({item}) => {
    return(
        <View style={styles.card}>
            <Text>{item.name}</Text>
        </View>
    )
}

export default function Home(){
    return (
        <View>
            <Carousel 
            data={carouselCards}
            renderItem={renderItem}
            sliderWidth={sliderWidth}
            itemWidth={cardWidth}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

    },

    card:{
        borderWidth: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: 'grey',
    }
})