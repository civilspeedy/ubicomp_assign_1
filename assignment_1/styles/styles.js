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

const Colours = {
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

    scrollView: {
        flex: 0.90,
        borderRadius: 10,
    },

    homeTop: {
        flex: 0.10,
        flexDirection: 'row',
        margin: 10,
    },

    filterButton: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: Colours.primary,
        justifyContent: 'center',
        borderColor: Colours.border,
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
        marginHorizontal: 10,
    },

    statstext: {
        fontSize: smallTextSize,
    },

    cardDesc: {
        textAlign: 'left',
    },

    folderContainer: {
        flex: 0.9,
    },

    savedFolder: {
        backgroundColor: Colours.primary,
        borderRadius: 10,
        borderColor: Colours.border,
        borderWidth: 3,
        flex: 1,
        alignItems: 'center',
        margin: 10,
    },

    folderText: {
        fontSize: 20,
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
        height: '40%',
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
    },

    checkBoxContainer: {
        flex: 1,
    },

    sliderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    saveButton: {
        borderRadius: 5,
        backgroundColor: 'cyan',
        padding: 2,
    },

    closeButton: {
        backgroundColor: Colours.complementary,
        borderRadius: 5,
        margin: 10,
    },

    description: {
        borderColor: Colours.border,
        borderWidth: 3,
        borderRadius: 5,
        padding: 5,
        backgroundColor: 'white',
    },
})