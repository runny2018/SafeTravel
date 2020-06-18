import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TouchableOpacity
} from 'react-native'

import MapView from 'react-native-maps';


const LATITUDE = 18.565172
const LONGITUDE = 73.920778

export default class TrackingUserLocation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            routeCoordinates: [],
            distanceTravelled: 0,
            prevLatLng: {},

        }
    }



    checkLocation = () => {
        this.watchID = navigator.geolocation.watchPosition(
            position => {
                const { coordinate, routeCoordinates, distanceTravelled } = this.state;
                const { latitude, longitude } = position.coords;

                const newCoordinate = {
                    latitude,
                    longitude
                };

                this.setState({
                    latitude,
                    longitude,
                    routeCoordinates: routeCoordinates.concat([newCoordinate]),
                    distanceTravelled:
                        distanceTravelled + this.calcDistance(newCoordinate),
                    prevLatLng: newCoordinate
                });
            },
            error => console.log(error),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }



    render() {
        return (
            <View>
                <Text>{this.state.latitude}</Text>
                <Button
                    title="Check"
                    onPress={() => this.checkLocation}
                />
            </View>
        )

    }
}





