import { StyleSheet } from "react-native";

const darkgrey = '#404040';

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
        flex: 0.90,
        borderRadius: 10,
    },

    homeTop: {
        flex: 0.10,
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    },

    distButton: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: "#abbd9a",
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderColor: '#404040',
        borderWidth: 3,
    },

    gestureHandlerRootView: {
        flex: 1,
    },

    h1: {
        fontWeight: 'bold',
        fontSize: 30,
        paddingTop: 10,
        paddingLeft: 5,
        alignSelf: 'auto',
    },

    card: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#abbd9a",
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
    },

    trailModal: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
})