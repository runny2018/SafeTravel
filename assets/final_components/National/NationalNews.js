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

import NationalNewsArticle from './NationalNews_Article';
import CardContentNational from './CardContent_National';


export default class NationalNews extends React.Component {

    constructor(props) {
        super(props);
        this.state = { articles: [], refreshing: true };
        this.fetchNews = this.fetchNews.bind(this);
    }


    componentDidMount() {
        this.fetchNews();
    }

    fetchNews() {
        axios.get('https://api.smartable.ai/coronavirus/news/IN', {
            headers: {
                'Subscription-Key': '429058f92b3246ae9b8ad1cd88daee46',
            },
            method: 'get'
        })
            .then(response => {
                // handle success
                this.setState({ articles: response.data.news, refreshing: false })
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
                    ListHeaderComponent={CardContentNational}
                    style={{
                        height: 400
                    }}
                    data={this.state.articles}
                    renderItem={({ item }) => <NationalNewsArticle article={item} />}
                    keyExtractor={item => item.title}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh.bind(this)}
                //showsVerticalScrollIndicator={false}
                //scrollEnabled={false}
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
