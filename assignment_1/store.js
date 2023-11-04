import AsyncStorage from "@react-native-async-storage/async-storage";

const saveTrail = async (trail) => {
    try {
        const json = JSON.stringify(trail);
        await AsyncStorage.setItem('trail', json);
    } catch (e) {
        console.log(e)
    }
};