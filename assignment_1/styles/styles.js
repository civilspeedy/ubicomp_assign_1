import { StyleSheet, PixelRatio } from "react-native";
import * as Haptics from 'expo-haptics';

export const defaultImpact = () => Haptics.impactAsync();
export const sliderImpacts = () => Haptics.selectionAsync();


console.log("Pixel Ratio:", PixelRatio.get())
/**Function to ajust the font size of small text used throughout the app 
 * @returns {Integer}
*/
const getSmallTextSize = () => {
    //fragment from https://stackoverflow.com/questions/33628677/react-native-responsive-font-size
    if (PixelRatio.get() > 3.125 || PixelRatio.get() < 3) {
        return 16.0;
    };
    if (PixelRatio.get() == 2.875) {
        return 14.0;
    };
    if (PixelRatio.get() > 3.5 && PixelRatio.get() > 3) {
        return  11.0;
    };
    return 12.0;
}
console.log("Small Text Size:", smallTextSize);

export const smallTextSize = getSmallTextSize();

/**Colours used throughout the app */
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
        backgroundColor: 'white',
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