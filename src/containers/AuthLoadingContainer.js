import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';
import AuthLoadingScreen from '../views/AuthLoadingScreen';
import { setUpToken } from '../ducks/Auth';

class AuthLoadingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const {
      navigation: { navigate },
      setUpToken: setToken,
    } = this.props;
    const userToken = await AsyncStorage.getItem('authToken');
    if (userToken) {
      setToken(userToken);
      navigate('App');
      return;
    }
    navigate('Auth');
  };

  render() {
    return <AuthLoadingScreen />;
  }
}
AuthLoadingContainer.propTypes = {
  setUpToken: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({});
const mapDispatchToProps = { setUpToken };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLoadingContainer);
