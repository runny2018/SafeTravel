import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TouchableOpacity
} from 'react-native'

const GLOBAL = require('../../GlobalConstants');

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SearchBarComponentNational() {

    return (
        <View>
            <View
                style={{
                    width: "90%",
                    height: 35,
                    borderWidth: 1,
                    borderColor: GLOBAL.COLOR.GRAY,
                    borderRadius: 40,
                    alignSelf: "center",
                    marginTop: 20,
                    paddingLeft: 8,
                    justifyContent: "center"
                }}
            >
                <MaterialCommunityIcons name="magnify" color={GLOBAL.COLOR.TURQ} size={25} />
            </View>
        </View>
    );
}
