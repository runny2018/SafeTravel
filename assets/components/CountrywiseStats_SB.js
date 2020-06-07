import React, { Fragment } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import SearchableDropdown from 'react-native-searchable-dropdown';

const axios = require('axios');

import items from './CountryCodes'



function SearchBarScreen() {
    const navigation = useNavigation();

    return (
        <Fragment>
            {/* Multi */}
            <SearchableDropdown
                multi={true}
                onItemSelect={(item) => {
                    navigation.navigate('CSS', {
                        countryItem: { item }
                    })
                }}
                containerStyle={{ padding: 5 }}
                onRemoveItem={(item, index) => {
                    const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
                    this.setState({ selectedItems: items });
                }}
                itemStyle={{
                    padding: 10,
                    marginTop: 2,
                    backgroundColor: '#ddd',
                    borderColor: '#bbb',
                    borderWidth: 1,
                    borderRadius: 5,
                }}
                itemTextStyle={{ color: '#222' }}
                itemsContainerStyle={{ maxHeight: "100%" }}
                items={items}
                //defaultIndex={2}
                chip={true}
                resetValue={true}
                textInputProps={
                    {
                        placeholder: "Enter a country",
                        underlineColorAndroid: "transparent",
                        style: {
                            padding: 12,
                            borderWidth: 1,
                            borderColor: '#ccc',
                            borderRadius: 5,
                        },
                        //onTextChange: text => alert(text)
                    }
                }
                listProps={
                    {
                        nestedScrollEnabled: true,
                    }
                }
            />
        </Fragment >
    )
}

function fetchCountriesData() {
    axios.get('https://coronavirus-19-api.herokuapp.com/countries')
        .then(response => {
            // this.setState({  })
            // console.log(response.data)
        })
        .catch(error => {
            console.log(error);
        });
}


export default class CountrywiseStats_SB extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            countriesData: []
        }
    }

    UNSAFE_componentWillMount() {
        axios.get('https://coronavirus-19-api.herokuapp.com/countries')
            .then(response => {
                // this.setState({  })
                //console.log(response.data)
                this.setState({
                    countriesData: response.data
                })
            })
            .catch(error => {
                console.log(error);
            });

    }



    render() {

        return (
            <View>
                <SearchBarScreen />
            </View>
        )
    }

}



