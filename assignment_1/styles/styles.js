import { StyleSheet } from "react-native";

export const coreStyles = StyleSheet.create({
    mainStyle: {
        fontFamily: 'Droid Sans',
        fontWeight: 'bold',
    },

    holePunchAvoider: {
        flex: 0.05,
        alignContent: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },

    navBar: {
        flex: 0.95,
        width: '100%',
        height: '90%',
    },

    scrollView: {
        flex: 1,
    },
    gestureHandlerRootView: {
        flex: 1,
    },

    h1: {
        fontWeight: 'bold',
        fontSize: 30,
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 5,
        alignSelf: 'auto',
    },

    card: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "grey",
        borderRadius: 10,
    },

    savedFolder: {
        backgroundColor: 'grey',
        borderRadius: 10,
        borderColor: '#404040',
        borderWidth: 3,
    },

    mapContainer: {
        flex: 0.6,
    },

    map: {
    },

    mapControlsContainer: {
        backgroundColor: 'white',
        flex: 0.4
    }
})