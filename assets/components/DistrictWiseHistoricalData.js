import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import CalendarPicker from 'react-native-calendar-picker';

const axios = require('axios');

import Moment from 'moment';
import { extendMoment } from 'moment-range';                            //you might need to change the moment import part

const moment = extendMoment(Moment);


export default class DistrictWiseHistoricalData extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userCity: "Pune",
            userState: "Maharashtra",
            selectedStartDate: null,
            districtDateWiseData: []
        }
        this.onDateChange = this.onDateChange.bind(this);
    }

    UNSAFE_componentWillMount() {
        axios.get('https://api.covid19india.org/districts_daily.json')
            .then(response => {
                this.setState({ districtDateWiseData: response.data.districtsDaily[`${this.state.userState}`][`${this.state.userCity}`] })
                console.log(this.state.districtDateWiseData)
            })
            .catch(error => {
                console.log(error);
            });

    }

    onDateChange(date) {
        this.setState({
            selectedStartDate: date,
        });
    }


    render() {
        const minDate = new Date(2020, 3, 21);
        const maxDate = new Date();

        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';

        //const momentFinalDate = moment(`${selectedStartDate}`).format('YYYY-MM-DD');
        //const finalDate = new Date(`${startDate}`)
        var elements = []
        elements = startDate.split(" ")
        var finalDate = elements[1] + " " + elements[2] + ", " + elements[3]

        var finalfinalDate = moment(finalDate).format('YYYY-MM-DD');


        return (
            <View>
                <CalendarPicker
                    onDateChange={this.onDateChange}
                    minDate={minDate}
                    maxDate={maxDate}
                />

                <View>

                    <Text>{finalfinalDate}</Text>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <View style={{
                        height: 80,
                        width: 80,
                        borderWidth: 1
                    }}>
                        <Text>Active:</Text>

                        {
                            this.state.districtDateWiseData ? this.state.districtDateWiseData.map((item) =>
                                finalfinalDate == item.date ? <Text>{item.active}</Text> : null
                            )
                                :
                                null
                        }



                    </View>
                    <View style={{
                        height: 80,
                        width: 80,
                        borderWidth: 1
                    }}>
                        <Text>Confirmed:</Text>
                        {
                            this.state.districtDateWiseData ? this.state.districtDateWiseData.map((item) =>
                                finalfinalDate == item.date ? <Text>{item.confirmed}</Text> : null
                            )
                                :
                                null
                        }
                    </View>
                    <View style={{
                        height: 80,
                        width: 80,
                        borderWidth: 1
                    }}>
                        <Text>Deceased:</Text>
                        {
                            this.state.districtDateWiseData ? this.state.districtDateWiseData.map((item) =>
                                finalfinalDate == item.date ? <Text>{item.deceased}</Text> : null
                            )
                                :
                                null
                        }
                    </View>
                    <View style={{
                        height: 80,
                        width: 80,
                        borderWidth: 1
                    }}>
                        <Text>Recovered:</Text>
                        {
                            this.state.districtDateWiseData ? this.state.districtDateWiseData.map((item) =>
                                finalfinalDate == item.date ? <Text>{item.recovered}</Text> : null
                            )
                                :
                                null
                        }
                    </View>
                </View>
            </View>
        )
    }
}

{/*//startDate is selected date*/ }