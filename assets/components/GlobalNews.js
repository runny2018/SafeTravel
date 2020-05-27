import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList
} from 'react-native';



const axios = require('axios');

import GlobalNewsArticle from './GlobalNewsArticle'


export default class GlobalNews extends React.Component {

    constructor(props) {
        super(props);
        this.state = { articles: [], refreshing: true };
        this.fetchNews = this.fetchNews.bind(this);
    }


    componentDidMount() {
        this.fetchNews();
    }

    fetchNews() {
        axios.get('https://covid19-us-api.herokuapp.com/news', {
            method: 'get'
        })
            .then(response => {
                // handle success
                this.setState({ articles: response.data.message, refreshing: false })
                //res = response.data.news
                //console.log(response.data.news)      //response.request._response
            })
            .catch(error => {
                // handle error
                //console.log(error);
                this.setState({ refreshing: false })
            })
            .then(function () {
                // always executed
            });

    }

    handleRefresh() {
        this.setState(
            {
                refreshing: true
            },
            () => this.fetchNews()
        );
    }


    render() {
        return (
            <View style={{ margin: 20 }}>
                <FlatList
                    data={this.state.articles}
                    renderItem={({ item }) => <GlobalNewsArticle article={item} />}
                    keyExtractor={item => item.title}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh.bind(this)}
                    showsVerticalScrollIndicator={false}
                />
            </View>

        )
    }

}
/*axios.get('https://api.smartable.ai/coronavirus/news/:location', {
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
            });*/



/*fetch('http://api.smartable.ai/coronavirus/news/:location', {
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
    });*/
