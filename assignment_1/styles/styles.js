import { StyleSheet, PixelRatio } from "react-native";


//2.625
console.log("Pixel Ratio:", PixelRatio.get())
//from https://stackoverflow.com/questions/33628677/react-native-responsive-font-size
let smallTextSize = 12;
if (PixelRatio.get() > 3.125 || PixelRatio.get() < 3) {
    smallTextSize = 14;
}
if (PixelRatio.get() < 3.5 && PixelRatio.get() > 3) {
    smallTextSize = 11;
}

console.log("Small Text Size:", smallTextSize);

export const Colours = {
    primary: '#C6EACD',
    secondary: '#A0DCAD',
    border: '#404040',
    complementary: '#DCA0CF',
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

    gestureHandlerRootView: {
        flex: 1,
    },

    h1: {
        fontWeight: 'bold',
        fontSize: 30,
        paddingTop: 10,
        paddingLeft: 5,
        alignSelf: 'flex-start',
        marginRight: 10,
    },

    homeHeader: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 30,
        paddingTop: 10,
        paddingLeft: 5,
        alignSelf: 'flex-start',
        marginRight: 10,
    },





    cardText: {
        alignSelf: 'flex-start',
        flex: 1,
    },

    cardStats: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 10,
    },

    statstext: {
        fontSize: smallTextSize,
    },

    cardDesc: {
        textAlign: 'left',
    },

    folderText: {
        fontSize: 20,
    },

    mapContainer: {
        flex: 1,
    },

    map: {
        flex: 1,
        width: '100%',
        height: '100%'
    },

    mapControlsContainer: {
        backgroundColor: 'white',
        flex: 0.4,
        color: 'black',
    },

    trailModalMapContainer: {
        flex: 1,
    },

    bottomButtons: {
        backgroundColor: Colours.complementary,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: 'black',
        marginHorizontal: 20,
        width: '50%',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 10,
    },
})