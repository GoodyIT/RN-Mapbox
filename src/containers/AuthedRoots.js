import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfilePage from './ProfileContainer';
import MapPage from './MapContainer';
import HomePage from '../components/HomePage';
import SearchPage from '../components/SearchPage';
import SubcategoryPage from '../components/SubcategoryPage';
import ProfileCardEditPage from '../components/ProfileCardEditPage';
import CreateEditCardPage from '../components/CreateEditCardPage';

const iconConfig = {
  Home: 'ios-home',
  Profile: 'ios-contact',
  Search: 'ios-search',
  MapPage: 'ios-map',
  default: 'ios-home',
};

const HomeStack = createStackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: () => ({
      header: null,
    }),
  },
  ProfileCardEdit: {
    screen: ProfileCardEditPage,
    mode: 'screen',
    navigationOptions: () => ({
      title: 'Back',
    }),
  },
  CreateEditCard: {
    screen: CreateEditCardPage,
    mode: 'screen',
  },
});

const SeachStack = createStackNavigator({
  Search: {
    screen: SearchPage,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Subcategory: {
    screen: SubcategoryPage,
  },
});

export default createBottomTabNavigator(
  {
    Home: HomeStack,
    Search: SeachStack,
    Profile: ProfilePage,
    MapPage: MapPage
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
