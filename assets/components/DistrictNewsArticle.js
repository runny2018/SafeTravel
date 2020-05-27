import React from 'react';
import { View, Linking, TouchableNativeFeedback, Text, TouchableOpacity, Image } from 'react-native';


export default class DistrictNewsArticle extends React.Component {
    render() {
        const {
            title,
            webUrl,
            images
        } = this.props.article;





        return (

            <View
                style={{
                    borderWidth: 2,
                    borderColor: "#e0e0e0",
                    width: "100%",
                    height: 200,
                    borderRadius: 12,
                    marginBottom: 15
                }}
            >
                {
                    images ? <Image
                        style={{ height: 100, width: "95%", borderRadius: 12, margin: 8 }}
                        source={{
                            uri: images[0].url
                        }}
                    /> :
                        <Image
                            style={{ height: 100, width: "95%", borderRadius: 12, margin: 8 }}
                            source={require('../images/dummy_newsarticle.jpg')}
                        />
                }

                <TouchableOpacity
                    //useForeground
                    onPress={() => Linking.openURL(webUrl)}
                >
                    <Text style={{
                        margin: 8
                    }}>{title}</Text>
                </TouchableOpacity>





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

