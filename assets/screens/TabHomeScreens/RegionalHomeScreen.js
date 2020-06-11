import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Animated
} from 'react-native'



import GetZone from '../../final_components/Regional/GetZone'
import DistrictStats from '../../final_components/Regional/DistrictStats';
import NearbyUsefulResources from '../../final_components/Regional/NearbyUsefulResources';


import * as Animatable from "react-native-animatable";
import { render } from 'react-dom';

var isHidden = true;


const GLOBAL = require('../../GlobalConstants');

export default function RegionalHomeScreen() {


    //render() {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                flex: 1,

            }}
        >
            <Text
                style={{
                    alignSelf: "center",
                    fontFamily: GLOBAL.FONT.MONT_BOLD,
                    marginTop: 20,
                    fontSize: 24
                }}
            >Sagar</Text>

            <GetZone />
            <DistrictStats />
            <NearbyUsefulResources />



        </ScrollView >
    )
    //}
}

{/*
showsVerticalScrollIndicator={false}
            style={{
                flex: 1,

            }}
*/}

