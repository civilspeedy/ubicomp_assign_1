import { StyleSheet } from "react-native";

const Colours = {
    primary: '#C6EACD',
    secondary: '#A0DCAD',
    border: '#404040'
}

export const coreStyles = StyleSheet.create({
    mainStyle: {
        fontFamily: 'Droid Sans',
        fontWeight: 'bold',
        flex: 1,
    },

    holePunchAvoider: {
        flex: 0.05,
        alignContent: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },

    navBar: {
        flex: 1,
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
        backgroundColor: Colours.primary,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderColor: Colours.border,
        borderWidth: 3,
        padding: 10,
        margin: 10
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
        backgroundColor: Colours.primary,
        borderRadius: 10,
        borderColor: Colours.border,
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
        backgroundColor: Colours.primary,
        borderRadius: 10,
        borderColor: Colours.border,
        borderWidth: 3,
        flex: 1,
    },

    mapContainer: {
        flex: 0.8,
    },

    map: {
        flex: 1,
    },

    mapControlsContainer: {
        backgroundColor: 'white',
        flex: 0.4,
        color: 'black',
    },

    trailModal: {
        backgroundColor: Colours.secondary,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        borderRadius: 20,
        marginTop: 15,
    },

    distModal: {
        width: '100%',
        height: '25%',
        backgroundColor: 'white',
        borderRadius: 50,
        borderColor: Colours.border,
        borderWidth: 3,
    },

    distModalContainer: {
        justifyContent: 'flex-start',
        flex: 1,
        marginTop: 15,
    },

    distSlider: {
        width: '75%',
        height: 1,
    },

    sliderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
})