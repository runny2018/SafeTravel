import React, { useState, useEffect } from 'react'
import { Grid, StackedBarChart, YAxis } from 'react-native-svg-charts'

import {
    View,
    Text,
    StyleSheet,
    Button,
    ScrollView
} from 'react-native'

import * as scale from 'd3-scale'


const data = [
    {
        label: "Goa",
        active: 3840,
        recovered: 1920,
        deceased: 960,

    },

]

const colors = ['green', 'orange', 'red']
const keys = ['active', 'recovered', 'deceased']

//  const states = [10, 40]

//yaxis stuff
const contentInset = { top: 20, bottom: 20 }

const axios = require('axios');


export default class StateBarChart extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            statesActiveData: null,
            statesRecoveredData: null,
            statesDeceasedData: null,

            stateBarChartData: null

        }
    }


    UNSAFE_componentWillMount() {
        axios.get('http://100.25.143.193/statsbarchart', {
            method: 'get'
        })
            .then(response => {
                this.setState({
                    stateBarChartData: [
                        {
                            state: "Andaman and Nicobar Islands",
                            active: response.data["Active"]["Andaman and Nicobar Islands"],
                            recovered: response.data["Recovered"]["Andaman and Nicobar Islands"],
                            deceased: response.data["Deaths"]["Andaman and Nicobar Islands"]
                        },
                        {
                            state: "Andhra Pradesh",
                            active: response.data["Active"]["Andhra Pradesh"],
                            recovered: response.data["Recovered"]["Andhra Pradesh"],
                            deceased: response.data["Deaths"]["Andhra Pradesh"]
                        },
                        {
                            state: "Arunachal Pradesh",
                            active: response.data["Active"]["Arunachal Pradesh"],
                            recovered: response.data["Recovered"]["Arunachal Pradesh"],
                            deceased: response.data["Deaths"]["Arunachal Pradesh"]
                        },
                        {
                            state: "Assam",
                            active: response.data["Active"]["Assam"],
                            recovered: response.data["Recovered"]["Assam"],
                            deceased: response.data["Deaths"]["Assam"]
                        },
                        {
                            state: "Bihar",
                            active: response.data["Active"]["Bihar"],
                            recovered: response.data["Recovered"]["Bihar"],
                            deceased: response.data["Deaths"]["Bihar"]
                        },
                        {
                            state: "Chandigarh",
                            active: response.data["Active"]["Chandigarh"],
                            recovered: response.data["Recovered"]["Chandigarh"],
                            deceased: response.data["Deaths"]["Chandigarh"]
                        },
                        {
                            state: "Chhattisgarh",
                            active: response.data["Active"]["Chhattisgarh"],
                            recovered: response.data["Recovered"]["Chhattisgarh"],
                            deceased: response.data["Deaths"]["Chhattisgarh"]
                        },
                        {
                            state: "Dadra and Nagar Haveli",
                            active: response.data["Active"]["Dadra and Nagar Haveli"],
                            recovered: response.data["Recovered"]["Dadra and Nagar Haveli"],
                            deceased: response.data["Deaths"]["Dadra and Nagar Haveli"]
                        },
                        {
                            state: "Daman and Diu",
                            active: response.data["Active"]["Daman and Diu"],
                            recovered: response.data["Recovered"]["Daman and Diu"],
                            deceased: response.data["Deaths"]["Daman and Diu"]
                        },
                        {
                            state: "Delhi",
                            active: response.data["Active"]["Delhi"],
                            recovered: response.data["Recovered"]["Delhi"],
                            deceased: response.data["Deaths"]["Delhi"]
                        },
                        {
                            state: "Goa",
                            active: response.data["Active"]["Goa"],
                            recovered: response.data["Recovered"]["Goa"],
                            deceased: response.data["Deaths"]["Goa"]
                        },
                        {
                            state: "Gujarat",
                            active: response.data["Active"]["Gujarat"],
                            recovered: response.data["Recovered"]["Gujarat"],
                            deceased: response.data["Deaths"]["Gujarat"]
                        },
                        {
                            state: "Haryana",
                            active: response.data["Active"]["Haryana"],
                            recovered: response.data["Recovered"]["Haryana"],
                            deceased: response.data["Deaths"]["Haryana"]
                        },
                        {
                            state: "Himachal Pradesh",
                            active: response.data["Active"]["Himachal Pradesh"],
                            recovered: response.data["Recovered"]["Himachal Pradesh"],
                            deceased: response.data["Deaths"]["Himachal Pradesh"]
                        },
                        {
                            state: "Jammu and Kashmir",
                            active: response.data["Active"]["Jammu and Kashmir"],
                            recovered: response.data["Recovered"]["Jammu and Kashmir"],
                            deceased: response.data["Deaths"]["Jammu and Kashmir"]
                        },
                        {
                            state: "Jharkhand",
                            active: response.data["Active"]["Jharkhand"],
                            recovered: response.data["Recovered"]["Jharkhand"],
                            deceased: response.data["Deaths"]["Jharkhand"]
                        },
                        {
                            state: "Karnataka",
                            active: response.data["Active"]["Karnataka"],
                            recovered: response.data["Recovered"]["Karnataka"],
                            deceased: response.data["Deaths"]["Karnataka"]
                        },
                        {
                            state: "Kerala",
                            active: response.data["Active"]["Kerala"],
                            recovered: response.data["Recovered"]["Kerala"],
                            deceased: response.data["Deaths"]["Kerala"]
                        },
                        {
                            state: "Ladakh",
                            active: response.data["Active"]["Ladakh"],
                            recovered: response.data["Recovered"]["Ladakh"],
                            deceased: response.data["Deaths"]["Ladakh"]
                        },
                        {
                            state: "Lakshadweep",
                            active: response.data["Active"]["Lakshadweep"],
                            recovered: response.data["Recovered"]["Lakshadweep"],
                            deceased: response.data["Deaths"]["Lakshadweep"]
                        },
                        {
                            state: "Madhya Pradesh",
                            active: response.data["Active"]["Madhya Pradesh"],
                            recovered: response.data["Recovered"]["Madhya Pradesh"],
                            deceased: response.data["Deaths"]["Madhya Pradesh"]
                        },
                        {
                            state: "Maharashtra",
                            active: response.data["Active"]["Maharashtra"],
                            recovered: response.data["Recovered"]["Maharashtra"],
                            deceased: response.data["Deaths"]["Maharashtra"]
                        },
                        {
                            state: "Manipur",
                            active: response.data["Active"]["Manipur"],
                            recovered: response.data["Recovered"]["Manipur"],
                            deceased: response.data["Deaths"]["Manipur"]
                        },
                        {
                            state: "Meghalaya",
                            active: response.data["Active"]["Meghalaya"],
                            recovered: response.data["Recovered"]["Meghalaya"],
                            deceased: response.data["Deaths"]["Meghalaya"]
                        },
                        {
                            state: "Mizoram",
                            active: response.data["Active"]["Mizoram"],
                            recovered: response.data["Recovered"]["Mizoram"],
                            deceased: response.data["Deaths"]["Mizoram"]
                        },
                        {
                            state: "Nagaland",
                            active: response.data["Active"]["Nagaland"],
                            recovered: response.data["Recovered"]["Nagaland"],
                            deceased: response.data["Deaths"]["Nagaland"]
                        },
                        {
                            state: "Odisha",
                            active: response.data["Active"]["Odisha"],
                            recovered: response.data["Recovered"]["Odisha"],
                            deceased: response.data["Deaths"]["Odisha"]
                        },
                        {
                            state: "Puducherry",
                            active: response.data["Active"]["Puducherry"],
                            recovered: response.data["Recovered"]["Puducherry"],
                            deceased: response.data["Deaths"]["Puducherry"]
                        },
                        {
                            state: "Punjab",
                            active: response.data["Active"]["Punjab"],
                            recovered: response.data["Recovered"]["Punjab"],
                            deceased: response.data["Deaths"]["Punjab"]
                        },
                        {
                            state: "Rajasthan",
                            active: response.data["Active"]["Rajasthan"],
                            recovered: response.data["Recovered"]["Rajasthan"],
                            deceased: response.data["Deaths"]["Rajasthan"]
                        },
                        {
                            state: "Sikkim",
                            active: response.data["Active"]["Sikkim"],
                            recovered: response.data["Recovered"]["Sikkim"],
                            deceased: response.data["Deaths"]["Sikkim"]
                        },
                        {
                            state: "Tamil Nadu",
                            active: response.data["Active"]["Tamil Nadu"],
                            recovered: response.data["Recovered"]["Tamil Nadu"],
                            deceased: response.data["Deaths"]["Tamil Nadu"]
                        },
                        {
                            state: "Telangana",
                            active: response.data["Active"]["Telangana"],
                            recovered: response.data["Recovered"]["Telangana"],
                            deceased: response.data["Deaths"]["Telangana"]
                        },
                        {
                            state: "Tripura",
                            active: response.data["Active"]["Tripura"],
                            recovered: response.data["Recovered"]["Tripura"],
                            deceased: response.data["Deaths"]["Tripura"]
                        },
                        {
                            state: "Uttar Pradesh",
                            active: response.data["Active"]["Uttar Pradesh"],
                            recovered: response.data["Recovered"]["Uttar Pradesh"],
                            deceased: response.data["Deaths"]["Uttar Pradesh"]
                        },
                        {
                            state: "Uttarakhand",
                            active: response.data["Active"]["Uttarakhand"],
                            recovered: response.data["Recovered"]["Uttarakhand"],
                            deceased: response.data["Deaths"]["Uttarakhand"]
                        },
                        {
                            state: "West Bengal",
                            active: response.data["Active"]["West Bengal"],
                            recovered: response.data["Recovered"]["West Bengal"],
                            deceased: response.data["Deaths"]["West Bengal"]
                        }
                    ]
                })

                console.log(response.data)






            })
            .catch(error => {

                //this.setState({ refreshing: false })
            })
            .then(function () {
                // always executed
            });
    }

    render() {
        return (
            <ScrollView>


                {
                    this.state.stateBarChartData != null ?
                        <StackedBarChart
                            style={{
                                height: 800, width: "80%", justifyContent: "center",
                                alignSelf: "center"
                            }}
                            keys={keys}
                            colors={colors}
                            data={this.state.stateBarChartData}
                            showGrid={false}
                            contentInset={{ top: 30, bottom: 30 }}
                            horizontal
                        >

                        </StackedBarChart> : null
                }


            </ScrollView >
        )
    }

}




/*
 UNSAFE_componentWillMount() {
        axios.get('https://b4f1ab3003b5.ngrok.io/statsbarchart', {
            method: 'get'
        })
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {

            })
            .then(function () {
                // always executed
            });
    }

    */




