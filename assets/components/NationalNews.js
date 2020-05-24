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



import { getNews } from '../components/news';

import Article from '../components/Article';


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
        getNews()
            .then(articles => this.setState({ articles, refreshing: false }))
            .catch(() => this.setState({ refreshing: false }));
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
            <FlatList
                data={this.state.articles}
                renderItem={({ item }) => <Article article={item} />}
                keyExtractor={item => item.webUrl}
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh.bind(this)}
            />
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
