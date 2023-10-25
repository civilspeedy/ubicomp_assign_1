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
        flex: 0.85,
    },

    homeTop: {
        flex: 0.15,
        flexDirection: 'row',
        margin: 10,
    },

    distButton: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: 'lightgreen',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
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
        borderColor: '#404040',
        borderWidth: 3,
        marginLeft: 10,
        marginRight: 10,
    },

    cardHeader: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
    },

    cardText: {
        alignSelf: 'flex-start',
        flex: 1,
    },

    cardStats: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
    },

    cardDesc: {
        textAlign: 'left',
    },

    savedFolder: {
        backgroundColor: 'grey',
        borderRadius: 10,
        borderColor: '#404040',
        borderWidth: 3,
        flex: 1,
    },

    mapContainer: {
        flex: 0.6,
    },

    map: {
        width: 400,
        height: 400,
        alignSelf: 'center',
    },

    mapControlsContainer: {
        backgroundColor: 'white',
        flex: 0.4,
        color: 'black',
    },

    trailPage: {
        flex: 1,
    }
})