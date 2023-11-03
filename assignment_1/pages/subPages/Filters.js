import React, { useState } from "react"
import { Modal, View, Text, Pressable } from "react-native";
import { coreStyles } from "../../styles/styles";
import Slider from "@react-native-community/slider";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const CustomSlider = () => {
    return (
        //from https://www.npmjs.com/package/@react-native-community/slider
        <Slider style={coreStyles.distSlider}
            minimumValue={0}
            maximumValue={10}
            minimumTrackTintColor="#abbd9a"
            thumbTintColor="#abbd9a" />
    )
}

//add aproprate filters

export default function Filters() {
    const [seeModal, setModal] = useState(false);

    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);

    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={seeModal}
                onRequestClose={() => {
                    setModal(!seeModal)
                }}>
                <View style={coreStyles.distModalContainer}>
                    <View style={coreStyles.distModal}>
                        <Pressable onPress={closeModal}><Text>close</Text></Pressable>
                        <View style={coreStyles.sliderContainer}>
                            <Text>Select Max Distance From You:</Text>
                            <CustomSlider />
                        </View>

                        <View style={coreStyles.sliderContainer}>
                            <Text>Select Max Trail Distance:</Text>
                            <CustomSlider />
                        </View>

                        <View style={coreStyles.checkBoxContainer}>
                            <BouncyCheckbox onPress={(isChecked) => { }} />
                            {/*from https://github.com/WrathChaos/react-native-bouncy-checkbox*/}

                        </View>
                    </View>
                </View>
            </Modal>

            <Pressable style={coreStyles.filterButton} onPress={openModal}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Filters</Text>
            </Pressable>
        </View>
    )
}