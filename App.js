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

export default class App extends React.Component {
  render() {
    return (
      <View>
        <UserLocation />
      </View>
    )
  }
}