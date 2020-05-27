import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import UserLocation from './assets/components/UserLocation';
import DistrictWiseHistoricalData from './assets/components/DistrictWiseHistoricalData';
import DistrictNews from './assets/components/DistrictNews';
import PMCaresPayment from './assets/components/PMCaresPayment';
import GlobalNews from './assets/components/GlobalNews';


export default class App extends React.Component {
  render() {
    return (
      <View>
        <GlobalNews />
      </View>
    )
  }
} 