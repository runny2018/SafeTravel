import React, { useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';


import messaging from '@react-native-firebase/messaging';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';




export default function Notifications() {

    useEffect(() => {
        // Get the device token
        //console.log("useeffect running!")
        messaging()
            .getToken()
            .then(token => {
                console.log(token)
            });

        // Listen to whether the token changes
        return messaging().onTokenRefresh(token => {
            console.log(token)
        });
    }, []);



    //render() {
    return (
        <View>
            <Text>Hello</Text>
        </View>
    )
    // }
} 