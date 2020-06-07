import React from 'react'
import { Grid, StackedBarChart, YAxis } from 'react-native-svg-charts'

import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'

import * as scale from 'd3-scale'


const data = [
    {
        label: "Goa",
        apples: 3840,
        bananas: 1920,
        cherries: 960,
        dates: 400,
        oranges: 400,
    },
    {
        label: "TN",
        apples: 1600,
        bananas: 1440,
        cherries: 960,
        dates: 400,
    },
    {
        label: "AP",
        apples: 640,
        bananas: 960,
        cherries: 3640,
        dates: 400,
    },
    {
        label: "MH",
        apples: 3320,
        bananas: 480,
        cherries: 640,
        dates: 400,
    },
]

const colors = ['#7b4173', '#a55194', '#ce6dbd', '#de9ed6']
const keys = ['apples', 'bananas', 'cherries', 'dates']

//  const states = [10, 40]

//yaxis stuff
const contentInset = { top: 20, bottom: 20 }

class StackedBarChartWithOnPressExample extends React.PureComponent {
    render() {
        return (
            <View
                style={{
                    flexDirection: "row"
                }}
            >
                <YAxis
                    data={data}
                    contentInset={contentInset}
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    //numberOfTicks={4}
                    formatLabel={value => data[index].label}

                />
                <StackedBarChart
                    style={{ height: 200, width: "80%" }}
                    keys={keys}
                    colors={colors}
                    data={data}
                    showGrid={false}
                    contentInset={{ top: 30, bottom: 30 }}
                    horizontal
                >

                </StackedBarChart>
            </View >

        )
    }
}

export default StackedBarChartWithOnPressExample



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




