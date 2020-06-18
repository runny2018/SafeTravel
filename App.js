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
import CardSlideAnimation from './assets/components/CardSlideAnimation';


import NotificationsComponent from './assets/components/NotificationsComponent';
import StateStats from './assets/final_components/National/StateStats';
import UserLocation from './assets/components/UserLocation';
import TrackingUserLocation from './assets/components/TrackingUserLocation';


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
        component={RegionalStackCall}
        options={{
          title: 'Regional',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}

      />
      <Tab.Screen
        name="National"
        component={NationalStackCall}
        options={{
          title: 'National',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}


      />
      <Tab.Screen
        name="Global"
        component={GlobalStackCall}
        options={{
          title: 'Global',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}

      />
    </Tab.Navigator>
  );
}

const RegionalStack = createStackNavigator()

function RegionalStackCall() {
  return (
    <RegionalStack.Navigator>
      <RegionalStack.Screen
        name="RegionalStack"
        component={RegionalHomeScreen}
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

const NationalStack = createStackNavigator()

function NationalStackCall() {
  return (
    <NationalStack.Navigator>
      <NationalStack.Screen
        name="NationalStack"
        component={TrackingUserLocation}
        options={{
          title: 'National Updates',
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
      <NationalStack.Screen
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
    </NationalStack.Navigator>
  );
}


const GlobalStack = createStackNavigator()


function GlobalStackCall() {
  return (
    <GlobalStack.Navigator>
      <GlobalStack.Screen
        name="Global Home"
        component={GlobalHomeScreen}
        options={{
          title: 'Global Updates',
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
      <GlobalStack.Screen
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
    </GlobalStack.Navigator>
  )
}



const AllStack = createStackNavigator()



function AllStackCall() {
  return (
    <AllStack.Navigator>
      <AllStack.Screen
        name="Regional"
        component={RegionalStackCall}
        options={{
          title: 'National Updates',
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
      <AllStack.Screen
        name="National"
        component={NationalStackCall}
        options={{
          title: 'National Updates',
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
      <AllStack.Screen
        name="Global"
        component={GlobalStackCall}
        options={{
          title: 'National Updates',
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

    </AllStack.Navigator>
  )

}





const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={GLOBAL.COLOR.TURQ} />

      <Stack.Navigator
        headerMode="none"
      >
        <Stack.Screen
          name="Tabs"
          component={MyTabs}
          options={{
            title: "Regional Updates"
          }}

        />
        <Stack.Screen name="Essentials" component={NearbyEssentials} />
      </Stack.Navigator>

    </NavigationContainer >
  );
}









