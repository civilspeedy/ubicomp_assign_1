import {React} from "react";
import {StyleSheet, View} from "react-native";
import {MapView} from "react-native-maps";

const Navigation  = () => {
    return(
        <View style={styles.container}>
            <MapView style={{flex: 1}}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
});

export default Navigation