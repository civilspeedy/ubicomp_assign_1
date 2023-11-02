import React, { useState } from "react"
import { Modal, View, Text, Pressable } from "react-native";
import { coreStyles } from "../../styles/styles";
import Slider from "@react-native-community/slider";

const FiltersModal = ({ closeModal }) => {
    return ( //from https://www.npmjs.com/package/@react-native-community/slider
        <View style={coreStyles.distModal}>
            <Pressable onPress={closeModal}><Text>close</Text></Pressable>
            <View style={coreStyles.sliderContainer}>
                <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Select Max Distance:</Text>
                <View style={{ padding: 10 }} />
                <Slider style={coreStyles.distSlider}
                    minimumValue={0}
                    maximumValue={10}
                    minimumTrackTintColor="#abbd9a"
                    thumbTintColor="#abbd9a"
                    tapToSeek="true" />
            </View>
        </View>
    )

}

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
                    <FiltersModal closeModal={closeModal} />
                </View>
            </Modal>

            <Pressable style={coreStyles.filterButton} onPress={openModal}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Filters</Text>
            </Pressable>
        </View>
    )
}