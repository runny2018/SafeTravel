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


export default class NationalStats extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cases: null,
            deaths: null,
            recovered: null,
            active: null
        }
    }

    UNSAFE_componentWillMount() {
        axios.get('https://api.covid19api.com/total/country/india')
            .then(response => {
                // this.setState({  })
                this.setState({
                    cases: response.data[response.data.length - 1]["Confirmed"],
                    deaths: response.data[response.data.length - 1]["Deaths"],
                    recovered: response.data[response.data.length - 1]["Recovered"],
                    active: response.data[response.data.length - 1]["Active"]
                })
                console.log(response.data[response.data.length - 1])

            })
            .catch(error => {
                console.log(error);
            });



    }



    render() {
        return (
            <View>
                <Text>NationalStats</Text>
                <Text>Confirmed: {this.state.cases}</Text>
                <Text>Deaths: {this.state.deaths}</Text>
                <Text>Recovered: {this.state.recovered}</Text>
                <Text>Active: {this.state.active}</Text>
            </View >
        )
    }

}



