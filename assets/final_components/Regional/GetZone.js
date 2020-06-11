import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

const axios = require('axios');

const GLOBAL = require('../../GlobalConstants');


export default function GetZone() {

    const [district, setDistrict] = useState("Pune");
    const [state, setState] = useState("Maharashtra");
    const [covidZones, setCovidZones] = useState([]);


    useEffect(() => {
        axios.get('https://api.covid19india.org/zones.json')
            .then(response => {
                setCovidZones(response.data.zones)
            })
            .catch(error => {


            })
            .finally(function () {

            })
    });



    return (
        <View>
            {
                covidZones ? covidZones.map((item) =>
                    district === item.district ?
                        <View style={{ flexDirection: "row", alignSelf: "center" }}>
                            <Text
                                style={{
                                    alignSelf: "center",
                                    color: GLOBAL.COLOR.GRAY,
                                    fontSize: 20
                                }}
                            >You are in a </Text>
                            {
                                item.zone === "Red" ? <Text style={{ color: "red", alignSelf: "center", fontSize: 20 }}>red</Text> : null
                            }
                            {
                                item.zone === "Orange" ? <Text style={{ color: "orange", alignSelf: "center", fontSize: 20 }}>orange</Text> : null
                            }
                            {
                                item.zone === "Green" ? <Text style={{ color: "green", alignSelf: "center", fontSize: 20 }}>green</Text> : null
                            }
                            <Text
                                style={{
                                    alignSelf: "center",
                                    color: GLOBAL.COLOR.GRAY,
                                    fontSize: 20
                                }}
                            > zone</Text>

                        </View> : null
                )


                    :
                    null

            }



        </View>
    )

}