import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
} from 'react-native';

import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);



const LastUpdated = (props) => {
    const dates = [moment(`${props.lastUpdatedDate}`, 'DD/MM/YYYY'), moment('2011-11-27', 'DD/MM/YYYY')];
    const range = moment.range(dates);
    return (
        <View>
            <Text>
                {moment(`${props.lastUpdatedDate}`, 'DD/MM/YYYY').subtract(-1, 'days').fromNow()}
            </Text>
        </View>
    )
}

export default LastUpdated

