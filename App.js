import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import Notifications from './assets/components/Notifications';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Notifications />
      </View>
    )
  }
} 