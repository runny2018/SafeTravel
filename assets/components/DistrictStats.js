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


export default class DistrictStats extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            active: null,
            confirmed: null,
            deceased: null,
            recovered: null
        }
    }

    UNSAFE_componentWillMount() {
        axios.post('https://68eca6d2.ngrok.io/distwise', {
            state: `${this.props.state}`,
            district: `${this.props.district}`,

        })
            .then(response => {
                this.setState({
                    active: response.data.active,
                    confirmed: response.data.confirmed,
                    deceased: response.data.deceased,
                    recovered: response.data.recovered
                })

            })
            .catch(function (error) {
                console.log(error);
            });


    }




    render() {
        return (
            <View style={{ marginTop: 30 }}>
                <Text>Active:{this.state.active}</Text>
                <Text>Confirmed:{this.state.confirmed}</Text>
                <Text>Deceased:{this.state.deceased}</Text>
                <Text>Recovered:{this.state.recovered}</Text>
            </View >
        )
    }

}



