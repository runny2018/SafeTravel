import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    FlatList,
    ActivityIndicator,

} from 'react-native';

import axios from 'axios';

export default class POST extends React.Component {


    componentDidMount() {
        axios.post('link', {
            email: 'runny2018@gmail.com',
            password: 'hello'
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <View>
                <Text>POST</Text>
            </View>
        )
    }
}

