import React from 'react';
import { AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProfilePage from '../components/ProfilePage';
import { loginWithPassword } from '../ducks/Auth';

class ProfileContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  logOut = () => {
    const { navigation } = this.props;
    AsyncStorage.removeItem('authToken');
    navigation.navigate('Auth');
  };

  render() {
    return <ProfilePage logOut={this.logOut} text="ffff" />;
  }
}

ProfileContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ ...state.auth });
const mapDispatchToProps = { loginWithPassword };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
