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


export default class GlobalMaps extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [
                "http://100.25.143.193/statsheatmaps_Active_w",
                "http://100.25.143.193/statsheatmaps_Confirmed_w",
                "http://100.25.143.193/statsheatmaps_Recovered_w",
                "http://100.25.143.193/statsheatmaps_Deaths_w", // Network image
            ]
        }
    }



    render() {
        return (
            <View>
                <SliderBox
                    images={this.state.images}
                    style={{
                        height: "100%"
                    }}
                />
            </View>
        )

    }
}





