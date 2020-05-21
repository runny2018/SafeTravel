import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import axios from 'axios';


export default class NationalNews extends React.Component {

    state = {
        data: ''
    }

    componentDidMount() {
        axios.get('https://api.smartable.ai/coronavirus/news/:location', {
            params: {
                location: 'IN'   //it maybe just IN
            },
            headers: {
                'Subscription-Key': '3009d4ccc29e4808af1ccc25c69b4d5d',

            },
            method: 'get'

        })
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }


    render() {

        return (
            <View>
                <Text></Text>
            </View>
        )
    }
}

{/*axios.get('https://api.smartable.ai/coronavirus/news/:location', {
            params: {
                location: "IN"   //it maybe just IN
            },
            headers: {
                "Subscription-Key": "3009d4ccc29e4808af1ccc25c69b4d5d",

            },
            method: 'get'

        })
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });*/}



{/*fetch('http://api.smartable.ai/coronavirus/news/:location', {
    method: 'GET',
    headers: {
        "Subscription-Key": "3009d4ccc29e4808af1ccc25c69b4d5d",
    },
    params: {
        location: "IN"   //it maybe just IN
    },


})
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson);
        this.setState({
            data: responseJson
        })
    })
    .catch((error) => {
        console.error(error);
    });*/}
