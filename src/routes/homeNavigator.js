import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomePage from '../components/HomePage';
import ProfileCardEditPage from '../components/ProfileCardEditPage';
import CreateEditCardPage from '../components/CreateEditCardPage';

const HomeStackNavigator = createStackNavigator({
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
  }
});

export default HomeStackNavigator
