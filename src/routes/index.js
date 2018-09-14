import React, { Component } from 'react';
import { createSwitchNavigator } from 'react-navigation';
import App from './mainNavigator';
import Auth from '../containers/LoginContainer';
import AuthLoading from '../containers/AuthLoadingContainer';
import Profile from '../views/ProfileScreen';
import MapPage from '../containers/MapContainer';

export default createSwitchNavigator(
  {
    AuthLoading,
    App,
    Auth,
    Profile,
    MapPage
  },
  {
    initialRouteName: 'App',
  }
);
