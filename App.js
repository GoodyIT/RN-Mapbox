import React, { Component } from 'react';
import { Root } from 'native-base';
import { Font, AppLoading } from 'expo';
import { Provider } from 'react-redux';
import Ionicons from 'native-base/Fonts/Ionicons.ttf';
import FontAwesome from 'native-base/Fonts/FontAwesome.ttf';
import Roboto from 'native-base/Fonts/Roboto.ttf';
import Roboto_medium from 'native-base/Fonts/Roboto_medium.ttf'; // eslint-disable-line
import Navigator from './src/routes/';
import store from './src/modules/store';

export default class RootApp extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto,
      Roboto_medium,
      Ionicons,
      FontAwesome
    });
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <Root>
          <AppLoading />
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
