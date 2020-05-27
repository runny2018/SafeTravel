import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Linking,
    Button
} from 'react-native';




export default class PMCaresPayment extends React.Component {
    render() {
        return (
            <View>
                <Button
                    title="Pay"
                    onPress={() => Linking.openURL("upi://pay?pa=pmcares@sbi&pn=PM%20CARES&mc=9400")}
                />
            </View>
        )
    }
} 