import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TouchableOpacity
} from 'react-native'


import call from 'react-native-phone-call'


import Dialog, { DialogContent } from 'react-native-popup-dialog';

const args = {
    number: '02026127394', // String value with the number to call
    prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call 
}

export default class Playground extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    render() {
        return (
            <View>
                <Button
                    title="Show Dialog"
                    onPress={() => {
                        this.setState({ visible: true });
                    }}
                />
                <Dialog
                    visible={this.state.visible}
                    onTouchOutside={() => {
                        this.setState({ visible: false });
                    }}
                >
                    <DialogContent
                        style={{
                            height: 400,
                            width: 400
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => call(args).catch(console.error)}
                        >
                            <Text>State/UT: 02026127394</Text>
                        </TouchableOpacity>

                        <Text>Central: 11-23978046</Text>
                        <Text>Police: 100</Text>
                    </DialogContent>
                </Dialog>
            </View>
        )

    }
}





