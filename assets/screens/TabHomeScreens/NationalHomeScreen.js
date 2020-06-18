import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'
import StateName from '../../final_components/National/StateName'
import CardSlideAnimationNational from '../../final_components/National/CardSlideAnimation_National'
import StateStats from '../../final_components/National/StateStats'
import SearchBarComponentNational from '../../final_components/National/SearchBarComponent_National'



export default function NationalHomeScreen() {
    return (
        <ScrollView style={{
            flex: 1
        }}>
            <SearchBarComponentNational />
            <StateName />
            <StateStats />
            <CardSlideAnimationNational />




        </ScrollView>
    )
}