import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import UserLocation from './assets/components/UserLocation';

import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'

const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('./assets/components/apple.jpg'),
    backgroundColor: '#81c784',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('./assets/components/apple.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('./assets/components/apple.jpg'),
    backgroundColor: '#22bcb5',
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showRealApp: false
    }
  }

  _renderItem = ({ item }) => {
    return (
      <View style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#81c784",
        flex: 1
      }}>
        <Text>{item.title}</Text>
        <Image
          style={{
            height: 400,
            width: 400
          }}
          source={item.image} />
        <Text
          style={{
            color: "black"
          }}
        >{item.text}</Text>
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  render() {
    if (this.state.showRealApp) {
      return <UserLocation />;
    } else {
      return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone} />;
    }
  }
}