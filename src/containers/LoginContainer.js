import React from 'react';
import PropTypes from 'prop-types';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import LoginScreen from '../views/LoginScreen';
import { loginWithPassword } from '../ducks/Auth';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  async componentWillReceiveProps(props) {
    const { token, navigation } = props;
    if (token) {
      await AsyncStorage.setItem('authToken', token);
      navigation.navigate('App');
    }
  }

  onEmailChange = email => this.setState({ email });

  onPasswordChange = password => this.setState({ password });

  logInPassword = () => {
    const { loginWithPassword: login } = this.props;
    const { email, password } = this.state;
    login({ email, password });
  };

  render() {
    return (
      <LoginScreen
        onEmailChange={this.onEmailChange}
        onPasswordChange={this.onPasswordChange}
        logInPassword={this.logInPassword}
      />
    );
  }
}
LoginContainer.propTypes = {
  token: PropTypes.string.isRequired,
  loginWithPassword: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ ...state.auth });
const mapDispatchToProps = { loginWithPassword };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
