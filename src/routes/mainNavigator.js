import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStackNavigator from './homeNavigator';
import SeachStackNavigator from './searchNavigator';
import ProfilePage from '../containers/ProfileContainer';
import { iconConfig } from '../config'

export default createBottomTabNavigator(
  {
    Home: HomeStackNavigator,
    Search: SeachStackNavigator,
    Profile: ProfilePage,
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
