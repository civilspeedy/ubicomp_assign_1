import React, {useState} from "react"
import { Alert, Modal, Pressable, View, Text} from "react-native"

export default function Trail() {
    const [seeModal, setModal] = useState(false); //Modal fragments from https://reactnative.dev/docs/modal

    //need to create seperate functions to open and close the modal


    return (
        <View>
            <Modal
                animationType='fade'
                transparent={true}
                visible={seeModal}
                onRequestClose={() => {
                    Alert.alert('closed modal');
                    setModal(!seeModal) }}>
                        <View>
                            <Pressable onPress={() => setModal(!seeModal)}><Text>Close</Text></Pressable>
                        </View>
            </Modal>

            <Pressable onPress={() => setModal(true)}><Text>Button</Text></Pressable>

        </View>
    )
}