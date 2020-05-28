import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import PlotlyGlobal from './assets/components/PlotlyGlobal'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <PlotlyGlobal />
      </View>
    )
  }
} 