import React, { useRef } from "react";
import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";

import CardContentNational from "./CardContent_National";
import NationalNews from "./NationalNews";

export default function CardSlideAnimationNational() {

    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                pan.setOffset({
                    y: pan.y._value
                });
            },
            onPanResponderMove: Animated.event(
                [
                    null,
                    { dy: pan.y }
                ],


            ),
            onPanResponderRelease: () => {
                pan.flattenOffset();
            }
        })
    ).current;


    return (
        <View>
            <Animated.View
                style={{
                    transform: [{ translateY: pan.y }]

                }}
                {...panResponder.panHandlers}
            >
                {/*<CardContentNational />*/}

                <NationalNews />

            </Animated.View>
        </View >
    );
}


