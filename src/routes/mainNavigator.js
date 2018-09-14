import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStackNavigator from './homeNavigator';
import SeachStackNavigator from './searchNavigator';
import Profile from '../containers/ProfileContainer';
import MapPage from '../containers/MapContainer';
import ProfilePage from '../views/ProfileScreen'

import { iconConfig } from '../config'


const mainNavigator = createBottomTabNavigator(
  {
    Home: HomeStackNavigator,
    Search: SeachStackNavigator,
    Profile: Profile,
    Map: MapPage
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {// eslint-disable-line
        const { routeName } = navigation.state;
        return (
          <Ionicons
            name={(iconConfig[routeName] || iconConfig.default) + (focused ? '' : '-outline')}
            size={25}
            color={tintColor}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: '#77CBEB',
      inactiveTintColor: '#777',
    },
  }
);

export default createStackNavigator(
  {
    mainNavigator: {
      screen: mainNavigator,
      navigationOptions: {
        header: null
      }
    },
    ProfilePage: {
      screen: ProfilePage,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'mainNavigator'
  }
)