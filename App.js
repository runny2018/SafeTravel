import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import NationalNews from './assets/components/NationalNews';
import UserLocation from './assets/components/UserLocation';
import Call from './assets/components/Call';


export default class App extends React.Component {
  render() {
    return (
      <View>
        <NationalNews />
      </View>
    )
  }
} 