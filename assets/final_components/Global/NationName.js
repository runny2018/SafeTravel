import React, { useEffect, useState } from 'react'
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


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const axios = require('axios');
const GLOBAL = require('../../GlobalConstants');

export default function NationName() {

    return (
        <View
            style={{
                alignSelf: "center",
                flexDirection: "row",
                marginTop: 16
            }}
        >
            <MaterialCommunityIcons name="map-marker" color={GLOBAL.COLOR.TURQ} size={30} />
            <Text
                style={{
                    fontSize: 24,
                    fontFamily: GLOBAL.FONT.MONT_BOLD,
                    marginLeft: 10
                }}
            >India</Text>
        </View>

    );
}
