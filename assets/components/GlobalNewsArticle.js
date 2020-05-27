import React from 'react';
import { View, Linking, TouchableNativeFeedback, Text, TouchableOpacity, Image } from 'react-native';


export default class GlobalNewsArticle extends React.Component {

    checkForCoronaWords = (text) => {
        if (text.includes("masks") || text.includes("mask") || text.includes("corona") || text.includes("coronavirus") || text.includes("hydroxychloroquine") ||
            text.includes("covid-19") || text.includes("covid") || text.includes("quarantine") || text.includes("pandemic") || text.includes("social distance")
            || text.includes("social distancing") || text.includes("outbreak") || text.includes("epidemic") || text.includes("contact") || text.includes("isolation")) {
            return true
        } else {
            return false
        }
    }

    render() {
        const {
            title,
            url,
            published
        } = this.props.article;



        return (
            <View>

                {
                    this.checkForCoronaWords(title) ? <View
                        style={{
                            borderWidth: 2,
                            borderColor: "#e0e0e0",
                            width: "100%",
                            height: 110,
                            borderRadius: 12,
                            marginBottom: 15
                        }}
                    >
                        <TouchableOpacity
                            //useForeground
                            onPress={() => Linking.openURL(url)}
                        >
                            <Text style={{
                                margin: 8
                            }}>{title}</Text>

                            <Text style={{
                                margin: 8
                            }}>{published}</Text>
                        </TouchableOpacity>

                    </View> : null
                }

            </View>

        );
    }
}

{/*<TouchableNativeFeedback
                //useForeground
                onPress={() => Linking.openURL(webUrl)}
            >
                
            </TouchableNativeFeedback>*/}


{/*

*/}

