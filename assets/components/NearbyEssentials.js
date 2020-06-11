import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TouchableOpacity
} from 'react-native'

const axios = require('axios');

import NearbyEssentialsCard from '../components/NearbyEssentialsCard'
import { ScrollView } from 'react-native-gesture-handler';


export default class NearbyEssentials extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userDistrict: "Pune",
            userState: "Maharashtra",
            data: []
        }
    }

    UNSAFE_componentWillMount() {
        axios.get('https://api.covid19india.org/resources/resources.json', {
            method: 'get'
        })
            .then(response => {
                //console.log(response.data)
                this.setState({ data: response.data.resources })

            })
            .catch(error => {

            })
            .then(function () {
                // always executed
            });
    }

    render() {
        return (
            <ScrollView

            >

                <View
                    style={{
                        margin: 10
                    }}
                >
                    {
                        this.state.data ? this.state.data.map((item) =>
                            this.state.userDistrict == item.city ?
                                <NearbyEssentialsCard
                                    category={item.category}
                                    contact={item.contact}
                                    description={item.descriptionandorserviceprovided}
                                    organisation={item.nameoftheorganisation}
                                    phonenumber={item.phonenumber}
                                /> : null
                        )
                            :
                            null
                    }


                </View>
            </ScrollView>
        )

    }
}





