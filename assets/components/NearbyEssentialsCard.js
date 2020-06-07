import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TouchableOpacity
} from 'react-native'
import { Linking } from 'react-native';

const axios = require('axios');


export default class Playground extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userDistrict: "Pune",
            userState: "Maharashtra",
            data: []
        }
    }



    render() {
        return (
            <View
                style={{
                    borderWidth: 2,
                    borderRadius: 6,
                    marginTop: 10,
                    padding: 10
                }}
            >
                <Text
                    style={{
                        fontWeight: "bold"
                    }}
                >{this.props.category}</Text>
                <Text>{this.props.description}</Text>
                <Text
                    style={{
                        fontStyle: "italic",
                        marginTop: 22
                    }}
                >{this.props.organisation}</Text>
                <Text>{this.props.phonenumber}</Text>
                <TouchableOpacity
                    onPress={() => Linking.openURL(this.props.contact)}
                >
                    {this.props.contact ? <Text
                        style={{
                            color: "blue"
                        }}
                    >{this.props.contact}</Text> : null
                    }



                </TouchableOpacity>


            </View>
        )

    }
}





