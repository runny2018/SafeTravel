import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TouchableOpacity
} from 'react-native'


const axios = require('axios');

import { SliderBox } from "react-native-image-slider-box";


export default class NationalMaps extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [
                "https://b4ee4d795af9.ngrok.io/statsheatmaps_Deaths",
                "https://b4ee4d795af9.ngrok.io/statsheatmaps_Recovered",
                "https://b4ee4d795af9.ngrok.io/statsheatmaps_Confirmed",
                "https://b4ee4d795af9.ngrok.io/statsheatmaps_Active", // Network image
            ]
        }
    }

    UNSAFE_componentWillMount() {
        axios.get('', {
            method: 'get'
        })
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {

            })
            .then(function () {

            });
    }



    render() {
        return (
            <View>
                <Image
                    style={{
                        height: 200,
                        width: 200
                    }}
                    source={{
                        uri: "https://b4ee4d795af9.ngrok.io/statsheatmaps_Deaths"
                    }}
                />

            </View>
        )

    }
}





