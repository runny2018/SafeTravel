import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
} from 'react-native';


const axios = require('axios');
const GLOBAL = require('../../GlobalConstants');

import SkeletonContent from "react-native-skeleton-content";


export default function DistrictStats() {

    const [district, setDistrict] = useState("Pune");
    const [state, setState] = useState("Maharashtra");

    const [active, setActive] = useState(0);
    const [confirmed, setConfirmed] = useState(0);
    const [deceased, setDeceased] = useState(0);
    const [recovered, setRecovered] = useState(0);


    const [refreshing, setRefreshing] = useState(true)


    useEffect(() => {
        axios.post('http://100.25.143.193/distwise', {
            state: "Maharashtra",
            district: "Pune",

        })
            .then(response => {
                setActive(response.data.active)
                setConfirmed(response.data.confirmed)
                setDeceased(response.data.deceased)
                setRecovered(response.data.recovered)

                setRefreshing(false)

            })
            .catch(function (error) {
                //console.log(error);
                setRefreshing(false)
            });
    });




    return (
        <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "space-around", marginLeft: 10, marginRight: 10 }}>
            <View>




                <SkeletonContent
                    containerStyle={{ flex: 1, alignSelf: "center" }}
                    isLoading={refreshing}
                    layout={[
                        { key: "someId", width: 80, height: 25, marginBottom: 6 },

                    ]}
                >
                    <Text
                        style={{
                            fontFamily: GLOBAL.FONT.MONT_REGULAR,
                            fontSize: 22,
                            alignSelf: "center"
                        }}
                    >{confirmed}</Text>


                </SkeletonContent>

                <Text
                    style={{
                        fontFamily: GLOBAL.FONT.MONT_MED,
                        fontSize: 12,
                        alignSelf: "center",
                        translateY: 12
                    }}
                >Con. Cases</Text>




            </View>
            <View
                style={{
                    backgroundColor: GLOBAL.COLOR.GRAY,
                    height: 20,
                    width: 2,
                    marginTop: 12
                }}
            ></View>

            <View>

                <SkeletonContent
                    containerStyle={{ flex: 1, alignSelf: "center" }}
                    isLoading={refreshing}
                    layout={[
                        { key: "someId", width: 80, height: 25, marginBottom: 6 },

                    ]}
                >
                    <Text
                        style={{
                            fontFamily: GLOBAL.FONT.MONT_REGULAR,
                            fontSize: 22,
                            alignSelf: "center"
                        }}
                    >{active}</Text>
                </SkeletonContent>

                <Text
                    style={{
                        fontFamily: GLOBAL.FONT.MONT_MED,
                        fontSize: 12,
                        alignSelf: "center",
                        translateY: 12
                    }}
                >Active Cases</Text>
            </View>
            <View
                style={{
                    backgroundColor: GLOBAL.COLOR.GRAY,
                    height: 20,
                    width: 2,
                    marginTop: 12
                }}
            ></View>

            <View>
                <SkeletonContent
                    containerStyle={{ flex: 1, alignSelf: "center" }}
                    isLoading={refreshing}
                    layout={[
                        { key: "someId", width: 80, height: 25, marginBottom: 6 },

                    ]}
                >
                    <Text
                        style={{
                            fontFamily: GLOBAL.FONT.MONT_REGULAR,
                            fontSize: 22,
                            alignSelf: "center"
                        }}
                    >{recovered}</Text>
                </SkeletonContent>
                <Text
                    style={{
                        fontFamily: GLOBAL.FONT.MONT_MED,
                        fontSize: 12,
                        alignSelf: "center",
                        translateY: 12
                    }}
                >Recovered</Text>
            </View>
            <View
                style={{
                    backgroundColor: GLOBAL.COLOR.GRAY,
                    height: 20,
                    width: 2,
                    marginTop: 12
                }}
            ></View>

            <View>
                <SkeletonContent
                    containerStyle={{ flex: 1, alignSelf: "center" }}
                    isLoading={refreshing}
                    layout={[
                        { key: "someId", width: 80, height: 25, marginBottom: 6 },

                    ]}
                >
                    <Text
                        style={{
                            fontFamily: GLOBAL.FONT.MONT_REGULAR,
                            fontSize: 22,
                            alignSelf: "center"
                        }}
                    >{deceased}</Text>
                </SkeletonContent>
                <Text
                    style={{
                        fontFamily: GLOBAL.FONT.MONT_MED,
                        fontSize: 12,
                        alignSelf: "center",
                        translateY: 12
                    }}
                >Deceased</Text>
            </View>



        </View >
    )
}





