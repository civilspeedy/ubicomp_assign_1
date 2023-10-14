import { View } from "react";
import { StyleSheet } from "react-native";
import {MapView} from "react-native-maps";

const Navigation  = () => {
    <View>
        <MapView style={styles.map}></MapView>
    </View>
};

const styles = StyleSheet.create({
    map:{
        width: '100%',
        height: '100%'
    }
});

export default Navigation