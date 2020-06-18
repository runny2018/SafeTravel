import React from 'react';
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


export default class StateStats extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userState: "Maharashtra",

            confirmed: null,
            active: null,
            recovered: null,
            deceased: null,

            refreshing: true


        }
    }

    UNSAFE_componentWillMount() {
        axios.get('http://100.25.143.193/statsbarchart')
            .then(response => {

                this.setState({
                    confirmed: response.data["Confirmed"][this.state.userState],
                    active: response.data["Active"][this.state.userState],
                    recovered: response.data["Recovered"][this.state.userState],
                    deceased: response.data["Deaths"][this.state.userState],
                    refreshing: false
                })

            })
            .catch(error => {
                this.setState({ refreshing: false })
            });

    }



    render() {
        return (
            <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-around", marginLeft: 10, marginRight: 10 }}>
                <View>

                    <SkeletonContent
                        containerStyle={{ flex: 1, alignSelf: "center" }}
                        isLoading={this.state.refreshing}
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
                        >{this.state.confirmed}</Text>


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
                        isLoading={this.state.refreshing}
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
                        >{this.state.active}</Text>
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
                        isLoading={this.state.refreshing}
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
                        >{this.state.recovered}</Text>
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
                        isLoading={this.state.refreshing}
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
                        >{this.state.deceased}</Text>
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

}



