import React, { useState } from "react"
import { Modal, View, Text, Pressable } from "react-native";
import { Colours, coreStyles } from "../../styles/styles";
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
    const [showModal, setModal] = useState(false);

    const [showEasy, setEasy] = useState(true);
    const [showMedium, setMedium] = useState(true);
    const [showHard, setHard] = useState(true);


    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);

    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={showModal}
                onRequestClose={() => {
                    setModal(!showModal)
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

                            {/*from https://github.com/WrathChaos/react-native-bouncy-checkbox*/}
                            <View style={coreStyles.checkBoxTextContainer}>
                                <BouncyCheckbox
                                    disableText={true}
                                    size={40}
                                    style={coreStyles.checkBox}
                                    fillColor={Colours.secondary}
                                    onPress={(isChecked) => setEasy(isChecked)}
                                    isChecked={showEasy} />
                                <Text>Easy</Text>
                            </View>
                            {/*chatgpt was asked how to store the state of checkbox -> onPress={(isChecked) => setEasy(isChecked)}*/}
                            <View style={coreStyles.checkBoxTextContainer}>
                                <BouncyCheckbox
                                    disableText={true}
                                    size={40}
                                    style={coreStyles.checkBox}
                                    fillColor={Colours.secondary}
                                    onPress={(isChecked) => setMedium(isChecked)}
                                    isChecked={showMedium} />
                                <Text>Medium</Text>
                            </View>

                            <View style={coreStyles.checkBoxTextContainer}>
                                <BouncyCheckbox
                                    disableText={true}
                                    size={40}
                                    style={coreStyles.checkBox}
                                    fillColor={Colours.secondary}
                                    onPress={(isChecked) => setHard(isChecked)}
                                    isChecked={showHard} />
                                <Text>Hard</Text>
                            </View>
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