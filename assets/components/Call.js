import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
} from 'react-native';

import call from 'react-native-phone-call'

const args = {
    number: '9922574950', // String value with the number to call
    prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call 
}

export default class Call extends React.Component {
    render() {
        return (
            <View>
                <Button
                    title="Call"
                    onPress={() => {
                        call(args).catch(console.error)
                    }}
                />

            </View>
        )
    }
} 