import React, { Component } from 'react';
import { Root } from 'native-base';
import { Provider } from 'react-redux';
import Navigator from './src/routes/';
import store from './src/modules/store';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { MapboxAccessToken } from './src/config';

MapboxGL.setAccessToken(MapboxAccessToken);
export default class RootApp extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <Root>
          {/* <AppLoading /> */}
        </Root>
      );
    }
    return (
      <Root>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </Root>
    );
  }
}