import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    PermissionsAndroid,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

import GetLocation from 'react-native-get-location'


export default class UserLocation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            location: null,
            loading: false,
        }
        this._requestLocation = this._requestLocation.bind(this)
    }



    async  _requestLocation() {
        try {

            const granted_one = PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'Example App',
                    'message': 'Example App access to your location '
                }
            )

            const granted_two = PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

            if (granted_two) {
                //console.log("You can use the ACCESS_FINE_LOCATION")
                this.setState({ loading: true, location: null });

                GetLocation.getCurrentPosition({
                    enableHighAccuracy: true,
                    timeout: 15000,
                })
                    .then(location => {
                        this.setState({
                            location,
                            loading: false,
                        });
                    })
                    .catch(ex => {
                        const { code, message } = ex;
                        console.warn(code, message);
                        if (code === 'CANCELLED') {
                            Alert.alert('Location cancelled by user or by another request');
                        }
                        if (code === 'UNAVAILABLE') {
                            Alert.alert('Location service is disabled or unavailable');
                        }
                        if (code === 'TIMEOUT') {
                            Alert.alert('Location request timed out');
                        }
                        if (code === 'UNAUTHORIZED') {
                            Alert.alert('Authorization denied');
                        }
                        this.setState({
                            location: null,
                            loading: false,
                        });
                    })

            }
            else {
                console.log("ACCESS_FINE_LOCATION permission denied")
            }
        }
        catch (err) {
            console.warn(err)
        }
    }

    render() {
        const { location, loading } = this.state;

        return (
            <View>
                <Button
                    disabled={loading}
                    title="Get Location"
                    onPress={this._requestLocation}
                />

                {loading ? (
                    <ActivityIndicator />
                ) : null}
                {location ? (
                    <Text>
                        {JSON.stringify(location, 0, 2)}
                    </Text>
                ) : null}
            </View>
        )
    }
}