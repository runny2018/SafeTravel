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
    ActivityIndicator,
    Alert
} from 'react-native';

import GetLocation from 'react-native-get-location'
import Geocoder from 'react-native-geocoder';

import Moment from 'moment';
import { extendMoment } from 'moment-range';
import LastUpdated from './LastUpdated';

const moment = extendMoment(Moment);

const axios = require('axios');

import DistrictStats from './DistrictStats'


export default class UserLocation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            location: null,
            loading: false,
            userLatitude: null,
            userLongitude: null,

            userCity: null,
            //userState: null,

            covidZones: []

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
                            userLatitude: location.latitude,
                            userLongitude: location.longitude
                        });

                        var coordinates = {
                            lat: this.state.userLatitude,
                            lng: this.state.userLongitude
                        };

                        Geocoder.geocodePosition(coordinates).then(res => {
                            // res is an Array of geocoding object (see below)

                            this.setState({ userCity: res[0].locality })
                            //this.setState({ userState: res[0].adminArea })



                        })
                            .catch(err => console.log(err))

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
                            if (code === 'UNAUTHORIZED') {
                                Alert.alert('Authorization denied');
                            }
                            this.setState({

                                location: null,
                                loading: false,
                            });
                        }
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

    UNSAFE_componentWillMount() {
        axios.get('https://api.covid19india.org/zones.json')
            .then(response => {
                this.setState({ covidZones: response.data.zones })
            })
            .catch(error => {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            })
    }



    render() {
        const { location, loading } = this.state;



        return (
            <ScrollView>
                <Button
                    disabled={loading}
                    title="Get Location"
                    onPress={this._requestLocation}
                />

                <Text>{this.state.userCity}</Text>

                {
                    this.state.covidZones ? this.state.covidZones.map((item) =>
                        this.state.userCity == item.district ? <Text>{item.zone}</Text> : null
                    )
                        :
                        null
                }


                {
                    this.state.covidZones ? this.state.covidZones.map((item) =>
                        this.state.userCity == item.district ? <LastUpdated lastUpdatedDate={item.lastupdated} /> : null
                    )
                        :
                        null
                }

                {
                    this.state.covidZones ? this.state.covidZones.map((item) =>
                        this.state.userCity == item.district ? <DistrictStats district={item.district} state={item.state} /> : null
                    )
                        :
                        null
                }


                {/*{loading ? (
                    <ActivityIndicator />
                ) : null}
                {location ? (
                    <Text>
                        {JSON.stringify(location, 0, 2)}
                    </Text>
                ) : null}*/}
            </ScrollView>
        )
    }
}


{/*
    axios.get('https://api.covid19india.org/zones.json')
                                .then(function (response) {
                                    // handle success
                                    console.log(response.data.zones);

                                    response.data.zones.map((item) => {
                                        return (
                                            <View>
                                                <Text>{item.district}</Text>
                                            </View>
                                        )
                                    })
                                    //console.log(covidZones)

                                })
                                .catch(function (error) {
                                    // handle error
                                    console.log(error);
                                })
                                .finally(function () {
                                    // always executed
                                })



*/}


{/*
fetch('https://api.covid19india.org/zones.json', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.zones);
                return responseJson.zones.map((data) => {
                    return (
                        <View><Text>{data.district}</Text></View>
                    )
                })
            })
            .catch((error) => {
                console.error(error);
            });
*/}