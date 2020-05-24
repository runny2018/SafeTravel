import React from 'react';
import { View, Linking, TouchableNativeFeedback } from 'react-native';


export default class Article extends React.Component {
    render() {
        const {
            title,
            webUrl
        } = this.props.article;



        return (
            <TouchableNativeFeedback
                //useForeground
                onPress={() => Linking.openURL(webUrl)}
            >
                <Text style={{
                    marginTop: 20
                }}>{title}</Text>
            </TouchableNativeFeedback>
        );
    }
}

