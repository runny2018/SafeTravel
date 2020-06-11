import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native'


import RegionalHomeScreen from './assets/screens/TabHomeScreens/RegionalHomeScreen';
import NationalHomeScreen from './assets/screens/TabHomeScreens/NationalHomeScreen';
import GlobalHomeScreen from './assets/screens/TabHomeScreens/GlobalHomeScreen';

import Regional from './assets/icons/BottomTabIcons/regional.svg'
import RegionalSelected from './assets/icons/BottomTabIcons/regional_selected.svg'
import Global from './assets/icons/BottomTabIcons/global.svg'
import GlobalSelected from './assets/icons/BottomTabIcons/global_selected.svg'
import National from './assets/icons/BottomTabIcons/national.svg'
import NationalSelected from './assets/icons/BottomTabIcons/national_selected.svg'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import RandomScreen from './assets/screens/RandomScreen';


const Tab = createMaterialBottomTabNavigator();


const GLOBAL = require('./assets/GlobalConstants');


import Bell from './assets/icons/Regional/bell.svg'
import SettingsGear from './assets/icons/Regional/settings_gear.svg'
import NearbyEssentials from './assets/components/NearbyEssentials';
import StateBarChart from './assets/components/StateBarChart';
import NationalMaps from './assets/components/NationalMaps';
import GlobalMaps from './assets/components/GlobalMaps';
import NationalNews from './assets/components/NationalNews';
import CardSlideAnimation from './assets/components/CardSlideAnimation';
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Regional"

      activeColor="white"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'white' }}
      barStyle={{ backgroundColor: GLOBAL.COLOR.TURQ }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {

          let number;

          if (route.name === "Regional") {
            number = focused ? "11" : "10"
            //console.log(focused)
          } else if (route.name === 'National') {
            number = focused ? "21" : "20"
          } else if (route.name === 'Global') {
            number = focused ? "31" : "30"
          }

          if (number == "11") {
            return <RegionalSelected width={25} height={25} />
          } else if (number == "10") {
            return <Regional width={25} height={25} />
          } else if (number == "21") {
            return <NationalSelected width={25} height={25} />
          } else if (number == "20") {
            return <National width={25} height={25} />
          } else if (number == "31") {
            return <GlobalSelected width={25} height={25} />
          } else if (number == "30") {
            return <Global width={25} height={25} />
          }


        },
      })}
    >
      <Tab.Screen
        name="Regional"
        component={RegionalHomeScreen}

      />
      <Tab.Screen
        name="National"
        component={CardSlideAnimation}

      />
      <Tab.Screen
        name="Global"
        component={GlobalMaps}

      />
    </Tab.Navigator>
  );
}

const RegionalStack = createStackNavigator()

function RegionalStackCall() {
  return (
    <RegionalStack.Navigator>
      <RegionalStack.Screen
        name="RegionalHome"
        component={MyTabs}


        options={{
          title: 'Regional Updates',
          headerStyle: {
            backgroundColor: GLOBAL.COLOR.TURQ,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            //fontWeight: 'bold',
            fontFamily: GLOBAL.FONT.MONT_BOLD
          },
          headerRight: () => (
            <View style={{
              flexDirection: "row",
              marginRight: 20,
              //backgroundColor: "red"
            }}>
              <Bell
                width={22}
                height={22}
                style={{
                  marginRight: 16
                }}
              />
              <SettingsGear
                width={24}
                height={24}
              />
            </View>
          )
        }}

      />
      <RegionalStack.Screen
        name="Essentials"
        component={NearbyEssentials}


        options={{
          title: 'Essentials',
          headerStyle: {
            backgroundColor: GLOBAL.COLOR.TURQ,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            //fontWeight: 'bold',
            fontFamily: GLOBAL.FONT.MONT_BOLD
          },

        }}

      />
    </RegionalStack.Navigator>
  );
}




const navigationRef = React.createRef();

function navigate(name, params) {
  navigationRef.current && navigationRef.current.navigate(name, params);
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={GLOBAL.COLOR.TURQ} />
      <RegionalStackCall />
      {/*<RegionalStack.Navigator initialRouteName="Regional Updates" ref={navigationRef}>
        <RegionalStack.Screen
          name="Regional Updates"
          component={MyTabs}
          options={{
            title: 'Regional Updates',
            headerStyle: {
              backgroundColor: GLOBAL.COLOR.TURQ,
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              //fontWeight: 'bold',
              fontFamily: GLOBAL.FONT.MONT_BOLD
            },
            headerRight: () => (
              <View style={{
                flexDirection: "row",
                marginRight: 20,
                //backgroundColor: "red"
              }}>
                <Bell
                  width={22}
                  height={22}
                  style={{
                    marginRight: 16
                  }}
                />
                <SettingsGear
                  width={24}
                  height={24}
                />
              </View>
            )
          }}
        />
        <RegionalStack.Screen name="Random" component={RandomScreen} />
        <RegionalStack.Screen name="Essentials" component={NearbyEssentials} />
        </RegionalStack.Navigator>*/}
    </NavigationContainer >
  );
}



{

  /*let number;
 
          if (route.name === "Regional") {
            number = focused ? "11" : "10"
            //console.log(focused)
          } else if (route.name === 'National') {
            number = focused ? "21" : "20"
          } else if (route.name === 'Global') {
            number = focused ? "31" : "30"
          }
 
          if (number == "11") {
            return <RegionalSelected width={30} height={30} />
          } else if (number == "10") {
            return <Regional width={30} height={30} />
          } else if (number == "21") {
            return <NationalSelected width={30} height={30} />
          } else if (number == "20") {
            return <National width={30} height={30} />
          } else if (number == "31") {
            return <GlobalSelected width={30} height={30} />
          } else if (number == "30") {
            return <Global width={30} height={30} />
          }
 
        */

}









{/*import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import UserLocation from './assets/components/UserLocation';

import DailyUpdate from './assets/components/DailyUpdate'
import GlobalStats from './assets/components/GlobalStats'
import NationalStats from './assets/components/NationalStats'

import CountrywiseStats_SB from './assets/components/CountrywiseStats_SB';
import CountryStatsScreen from './assets/components/CountryStatsScreen'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DistrictNews from './assets/components/DistrictNews';

import NearbyEssentials from './assets/components/NearbyEssentials'



const Stack = createStackNavigator();

import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'

import Notifications from './assets/components/Notifications';
import PMCaresPayment from './assets/components/PMCaresPayment';
import StateBarChart from './assets/components/StateBarChart';

import Playground from './assets/components/Playground'
import NationalMaps from './assets/components/NationalMaps'

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
    if (!this.state.showRealApp) {
      return (
        <NationalMaps />
      )
    } else {
      return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone} />;
    }
  }
}


*/}

/*
(
        <NavigationContainer>
          <Stack.Navigator initialRouteName="CWS_SB">
            <Stack.Screen name="CWS_SB" component={CountrywiseStats_SB} />
            <Stack.Screen name="CSS" component={CountryStatsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )
      */



