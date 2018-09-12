import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import {
  Title,
  Button,
  Body,
  Icon,
  Text,
  Input,
  Item,
  Label,
  CheckBox,
  ListItem,
} from 'native-base';
import Expo from 'expo';

const styles = {
  container: {
    backgroundColor: '#f6f6f6',
    paddingTop: Expo.Constants.statusBarHeight + 35,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 13,
    paddingRight: 13,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  header: {
    fontSize: 25,
    color: '#555',
    marginBottom: 28,
  },
  mb_10: {
    marginBottom: 10,
  },
  color_de: {
    color: '#dedede',
  },
  listItem: {
    borderBottomWidth: 0,
  },
  rememberMe_text: {
    fontSize: 10,
    color: '#777',
  },
  borderRadius_10: {
    borderRadius: 10,
  },
  or: {
    textAlign: 'center',
    color: '#777',
  },
  loginButtonsView: {
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signUpView: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-end',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  signUpButton: {
    padding: 0,

    margin: 0,
  },
};

const LoginScreen = ({ onEmailChange, onPasswordChange, logInPassword }) => (
  <View style={styles.container}>
    <View style={styles.wrapper}>
      <View>
        <Title style={styles.header}>Log In</Title>
      </View>
      <View style={styles.mb_10}>
        <Item floatingLabel>
          <Icon active name="ios-mail-outline" style={styles.color_de} />
          <Label style={styles.color_de}>Username</Label>
          <Input onChangeText={onEmailChange} />
        </Item>
      </View>
      <View style={styles.mb_10}>
        <Item floatingLabel>
          <Icon active name="key" style={styles.color_de} />
          <Label style={styles.color_de}>Password</Label>
          <Input onChangeText={onPasswordChange} secureTextEntry />
        </Item>
      </View>
      <View style={styles.mb_10}>
        <ListItem style={styles.listItem}>
          <CheckBox checked color="#777" />
          <Body>
            <Text style={styles.rememberMe_text}>Remember me</Text>
          </Body>
        </ListItem>
      </View>
      <View style={styles.mb_10}>
        <Button onPress={logInPassword} info block style={styles.borderRadius_10}>
          <Text>Log in</Text>
        </Button>
      </View>
      <View style={styles.signUpView}>
        <Text style={{ color: '#999' }}>Don&apos;t have an account?</Text>
        <Button small transparent style={styles.signUpButton}>
          <Text style={{ color: '#777' }}>Sign Up</Text>
        </Button>
      </View>
    </View>
  </View>
);
LoginScreen.propTypes = {
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  logInPassword: PropTypes.func.isRequired,
};

export default LoginScreen;
