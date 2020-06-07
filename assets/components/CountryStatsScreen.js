import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'

const axios = require('axios');






export default function CountryStatsScreen({ route, navigation }) {

    /*
    active, cases, casesPerOneMillion, country, critical, deaths, deathsPerOneMillion,
    recovered, todayCases, todayDeaths, totalTests
    */


    const [active, setActive] = useState(0);
    const [cases, setCases] = useState(0)
    const [casesPerOneMillion, setCasesPerOneMillion] = useState(0)
    const [critical, setCritical] = useState(0)
    const [deaths, setDeaths] = useState(0)
    const [deathsPerOneMillion, setDeathsPerOneMillion] = useState(0)
    const [recovered, setRecovered] = useState(0)
    const [todayCases, setTodayCases] = useState(0)
    const [todayDeaths, setTodayDeaths] = useState(0)
    const [totalTests, setTotalTests] = useState(0)


    const { countryItem } = route.params;

    const countryName = countryItem.item.name
    const countryCode = countryItem.item.code


    useEffect(() => {
        const { country } = route.params;
        axios.get('https://coronavirus-19-api.herokuapp.com/countries/' + countryName)
            .then(response => {
                // this.setState({  })
                console.log(response.data)

                setActive(response.data.active)


            })
            .catch(error => {
                console.log(error);
            });




    });

    //render() {
    return (
        <View style={{ flex: 1, margin: 14 }}>
            {/*<Text>Country: {countryName}</Text>*/}
            {/*<Image
                style={{
                    height: 64,
                    width: 64
                }}
                source={{
                    uri: "https://www.countryflags.io/" + countryCode + "/shiny/64.png"
                }}
            />*/}

            <View style={{
                backgroundColor: "white",
                width: "100%",
                height: 400,
                borderColor: "#eeeeee",
                borderWidth: 2,
                padding: 14
            }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}
                >
                    <Text
                        style={{
                            fontSize: 26,
                        }}
                    >{countryName}</Text>
                    <Image
                        style={{
                            height: 40,
                            width: 64
                        }}
                        source={{
                            uri: "https://www.countryflags.io/" + countryCode + "/shiny/64.png"
                        }}
                    />
                </View>

                <View
                    style={{
                        height: 2,
                        width: "100%",
                        backgroundColor: "#e0e0e0",
                        borderRadius: 5,
                        marginTop: 20
                    }}
                />

                <Text>{active}</Text>
            </View>

        </View>
    )
    //}
}

