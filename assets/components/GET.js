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

export default class GET extends React.Component {
    state = {
        nameList: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                const nameList = res.data;
                this.setState({ nameList });
            })
    }

    render() {

        const { nameList } = this.state;


        return (
            <ScrollView>
                {nameList.map(user => <Text style={{
                    fontSize: 20
                }}>{user.title}</Text>)}
            </ScrollView>
        )
    }
}

