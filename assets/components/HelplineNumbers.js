import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    AsyncStorage
} from 'react-native';




export default class HelplineNumbers extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            districtUser: "Pune",
            stateUser: "Maharashtra",
            number: null
        }
    }

    UNSAFE_componentDidMount() {
        this._storeData()

    }

    _storeData = async () => {
        try {
            await AsyncStorage.setItem('Andhra Pradesh', '08662410978');
            await AsyncStorage.setItem('Arunachal Pradesh', '9436055743');
            await AsyncStorage.setItem('Assam', '6913347770');
            await AsyncStorage.setItem('Bihar', '104');
            await AsyncStorage.setItem('Chhattisgarh', '104');
            await AsyncStorage.setItem('Goa', '104');
            await AsyncStorage.setItem('Gujarat', '104');
            await AsyncStorage.setItem('Haryana', '8558893911');
            await AsyncStorage.setItem('Himachal Pradesh', '104');
            await AsyncStorage.setItem('Jharkhand', '104');
            await AsyncStorage.setItem('Karnataka', '104');
            await AsyncStorage.setItem('Kerala', '04712552056');
            await AsyncStorage.setItem('Madhya Pradesh', '104');
            await AsyncStorage.setItem('Maharashtra', '02026127394');
            await AsyncStorage.setItem('Manipur', '3852411668');
            await AsyncStorage.setItem('Meghalaya', '108');
            await AsyncStorage.setItem('Mizoram', '102');
            await AsyncStorage.setItem('Nagaland', '7005539653');
            await AsyncStorage.setItem('Odisha', '9439994859');
            await AsyncStorage.setItem('Punjab', '104');
            await AsyncStorage.setItem('Rajasthan', '01412225624');
            await AsyncStorage.setItem('Sikkim', '104');
            await AsyncStorage.setItem('Tamil Nadu', '04429510500');
            await AsyncStorage.setItem('Telangana', '104');
            await AsyncStorage.setItem('Tripura', '03812315879');
            await AsyncStorage.setItem('Uttarakhand', '104');
            await AsyncStorage.setItem('Uttar Pradesh', '18001805145');
            await AsyncStorage.setItem('West Bengal', '1800313444222');
            await AsyncStorage.setItem('Andaman and Nicobar Islands', '03192232102');
            await AsyncStorage.setItem('Chandigarh', '9779558282');
            await AsyncStorage.setItem('Dadra and Nagar Haveli and Daman and Diu', '104');
            await AsyncStorage.setItem('Delhi', '01122307145');
            await AsyncStorage.setItem('Jammu and Kashmir', '01912520982');
            await AsyncStorage.setItem('Ladakh', '01982256462');
            await AsyncStorage.setItem('Lakshadweep', '104');
            await AsyncStorage.setItem('Puducherry', '104');



        } catch (error) {
            // Error saving data
        }

    };

    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem(this.state.stateUser);
            if (value !== null) {
                // We have data!!
                console.log(value);
                this.setState({
                    number: value
                })
                return value
            }
        } catch (error) {
            // Error retrieving data
        }
    };


    render() {

        return (
            <View style={{
                marginTop: 30
            }}>


                <Text>HelplineNumbers: </Text>
                <Text>State/UT: 02026127394</Text>
                <Text>Central: 11-23978046</Text>
                <Text>Police: 100</Text>


            </View>
        )
    }
}

//

