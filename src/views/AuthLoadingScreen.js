import React from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';

const AuthLoadingScreen = () => (
  <View style={{ paddingTop: 50 }}>
    <ActivityIndicator />
    <StatusBar barStyle="default" />
  </View>
);

export default AuthLoadingScreen;
