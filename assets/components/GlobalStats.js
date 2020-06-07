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


export default class GlobalStats extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cases: null,
            deaths: null,
            recovered: null,
        }
    }

    UNSAFE_componentWillMount() {
        axios.get('https://coronavirus-19-api.herokuapp.com/all')
            .then(response => {
                // this.setState({  })
                this.setState({
                    cases: response.data.cases,
                    deaths: response.data.deaths,
                    recovered: response.data.recovered
                })

            })
            .catch(error => {
                console.log(error);
            });



    }



    render() {
        return (
            <View>
                <Text>GlobalStats</Text>
                <Text>Cases: {this.state.cases}</Text>
                <Text>Deaths: {this.state.deaths}</Text>
                <Text>Recovered: {this.state.recovered}</Text>
            </View >
        )
    }

}



