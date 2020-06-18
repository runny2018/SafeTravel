import React, { useRef } from "react";

import {
    View,
    Text,
    StyleSheet,
    TouchableNativeFeedback
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient';

const GLOBAL = require('../../GlobalConstants');

import GraphPresent from '../../images/graph_present.svg'
import Location from '../../images/location.svg'
import NationalNews from "./NationalNews";


export default function CardContentNational() {
    return (
        <View
            style={{
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                marginTop: 20,
                marginBottom: 80,

                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,

                elevation: 3,
                backgroundColor: "white",

                padding: 10,


            }}
        >

            <View style={{
                marginTop: 10,
                marginBottom: 30,
                marginLeft: 12,
                marginRight: 12
            }}>
                <View>
                    <TouchableNativeFeedback
                        onPress={() => console.log("Queries")}
                    >

                        <LinearGradient
                            colors={['#fcffb5', '#54d3c2']}
                            style={{
                                height: 110,
                                width: "100%",
                                backgroundColor: 'red',
                                borderRadius: 12,
                                justifyContent: "center",
                                alignItems: "flex-start",


                            }}
                            useAngle={true}
                            angle={-45}
                        >
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                //backgroundColor: "red",
                                width: "100%",

                            }}>
                                <Text
                                    style={{
                                        marginLeft: 24,
                                        fontFamily: GLOBAL.FONT.MONT_REGULAR,
                                        fontSize: 16,

                                    }}
                                >Graphical Presentation</Text>
                                <GraphPresent
                                    width={80}
                                    height={80}
                                    style={{
                                        marginRight: 15,
                                        marginBottom: 15
                                    }}
                                />
                            </View>


                        </LinearGradient>

                    </TouchableNativeFeedback>
                </View>

                <View
                    style={{
                        marginTop: 15
                    }}
                >
                    <TouchableNativeFeedback
                        onPress={() => console.log("Queries")}

                    >

                        <LinearGradient
                            colors={['#ffbbf4', '#54d3c2']}
                            style={{
                                height: 110,
                                width: "100%",
                                backgroundColor: 'red',
                                borderRadius: 12,
                                justifyContent: "center",
                                alignItems: "flex-start",


                            }}
                            useAngle={true}
                            angle={-45}
                        >
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                //backgroundColor: "red",
                                width: "100%",

                            }}>
                                <Text
                                    style={{
                                        marginLeft: 24,
                                        fontFamily: GLOBAL.FONT.MONT_REGULAR,
                                        fontSize: 16,

                                    }}
                                >State Heat Maps</Text>
                                <Location
                                    width={80}
                                    height={80}
                                    style={{
                                        marginRight: 15
                                    }}
                                />
                            </View>


                        </LinearGradient>

                    </TouchableNativeFeedback>
                </View>



            </View>



        </View >
    );
}


