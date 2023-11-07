import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveTrail = async (trail) => {
    try {
        await AsyncStorage.setItem('key', JSON.stringify(trail));
        console.log("Saved")
    }
    catch (e) {
        console.error(e);
    }
}

export const getSavedTrail = async () => {
    try {
        const response = await AsyncStorage.getItem('key');
        console.log("get successful")
        const jsonResponse = JSON.parse(response)
        return jsonResponse.id
    }
    catch (e) {
        console.error(e);
    }
}

// store for filters
export let filterJson = {
    maxDistanceFromUser: 50,
    maxDistance: 50,
    hard: true,
    medium: true,
    easy: true,
};