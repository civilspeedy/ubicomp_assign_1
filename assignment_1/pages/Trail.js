import React from "react"
import { Alert, Modal, View } from "react-native"

export default function Trail(trail) {
    const [seeModal, setModal] = useState(false);
    return (
        <View>
            <Modal
                animationType='fade'
                transparent={true}
                visible={seeModal}
                onRequestClose={() => {
                    Alert.alert('closed model');
                    setModal(!seeModal)
                }}>

            </Modal>
        </View>
    )
}