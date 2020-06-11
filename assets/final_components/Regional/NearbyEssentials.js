import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

const axios = require('axios');

const GLOBAL = require('../../GlobalConstants');


export default function NearbyEssentials() {

    const [district, setDistrict] = useState("Pune");
    const [state, setState] = useState("Maharashtra");
    const [covidZones, setCovidZones] = useState([]);


    useEffect(() => {

    });



    return (
        <View>


            <Text>NearbyEssentials</Text>

        </View>
    )

}