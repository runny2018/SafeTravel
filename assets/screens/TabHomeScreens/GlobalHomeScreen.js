import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'


import SearchBarComponentGlobal from '../../final_components/Global/SearchBarComponent_Global'
import NationName from '../../final_components/Global/NationName'
import NationalStats from '../../final_components/Global/NationalStats'
import CardSlideAnimationGlobal from '../../final_components/Global/CardSlideAnimation_Global'


export default function GlobalHomeScreen() {
    return (
        <View style={{
            flex: 1
        }}>
            <SearchBarComponentGlobal />
            <NationName />
            <NationalStats />
            <CardSlideAnimationGlobal />


        </View>
    )

}