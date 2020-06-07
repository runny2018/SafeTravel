import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button
} from 'react-native'

import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';


export default function FirebaseAuth() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    if (!user) {
        return (
            <View>
                <Button
                    title="Google Sign-In"
                    onPress={() => this.onGoogleButtonPress().then(() => console.log("Success"))}
                />
            </View>
        );
    }




    onLoginOrRegister = () => {
        GoogleSignin.signIn()
            .then((data) => {
                // Create a new Firebase credential with the token
                const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
                // Login with the credential
                return firebase.auth().signInWithCredential(credential);
            })
            .then((user) => {
                // If you need to do anything with the user, do it here
                // The user will be logged in automatically by the
                // `onAuthStateChanged` listener we set up in App.js earlier
                console.log(user.email)
            })
            .catch((error) => {
                const { code, message } = error;
                // For details of error codes, see the docs
                // The message contains the default Firebase string
                // representation of the error
            });
    }

    async function onGoogleButtonPress() {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }

    GoogleSignin.configure({
        webClientId: '932526353747-o7j7gqv6sece9necofqag0u5rgi5ma4t.apps.googleusercontent.com',
    });


    return (
        <View>
            <Button
                title="Google Sign-In"
                onPress={() => this.onLoginOrRegister}
            />

        </View>
    )

}