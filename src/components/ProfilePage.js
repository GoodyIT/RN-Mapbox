import React from 'react';
import { Switch } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Content, Button, Icon, Text, Thumbnail, Badge, Picker } from 'native-base';
import { Col, Grid } from 'react-native-easy-grid';
import { commonStyles } from '../modules';
import ProfilesCard from './ProfilesCard';
import FiltersBadge from './FiltersBadge';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = {
  container: {
    backgroundColor: '#f6f6f6',
    paddingTop: getStatusBarHeight() + 5,
  },
  avatar: {
    height: 130,
    width: 'auto',
  },
  name: {
    marginBottom: 20,
    textAlign: 'center',
  },
};

const uri = 'http://media-cache-ak0.pinimg.com/736x/a0/58/95/a0589500a7e9f9d434fa937162bd0d8c.jpg';

const ProfilePage = ({ logOut }) => (
  <Container style={styles.container}>
    <Content>
      <Grid>
        <Col />
        <Col style={{ width: 130 }}>
          <Thumbnail
            square
            large
            source={{ uri }}
            style={{ ...styles.avatar, ...commonStyles.rounded_10 }}
          />
          <Text style={styles.name}>Name Surname</Text>
        </Col>
        <Col />
      </Grid>

      <FiltersBadge filters={['Music', 'Television', 'Food', 'Internet', 'Harmonica Music']} />

      <Grid style={{ ...commonStyles.px_7, ...commonStyles.mb_10 }}>
        <Col style={{ ...commonStyles.bg_white, ...commonStyles.rounded_10 }}>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="ios-arrow-down-outline" />}
            placeholder="Age"
            placeholderStyle={{ color: '#bfc6ea' }}
            placeholderIconColor="#007aff"
            style={{ width: undefined }}
            selectedValue={undefined}>
            <Picker.Item label="20-25" value="20-25" />
            <Picker.Item label="25-30" value="25-30" />
            <Picker.Item label="30-35" value="30-35" />
            <Picker.Item label="30-35" value="30-35" />
            <Picker.Item label="35-40" value="35-40" />
            <Picker.Item label="above 40" value="40+" />
          </Picker>
        </Col>
        <Col
          style={{
            ...commonStyles.bg_white,
            ...commonStyles.rounded_10,
            marginLeft: 10,
          }}>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="ios-arrow-down-outline" />}
            placeholder="Gender"
            placeholderStyle={{ color: '#bfc6ea' }}
            placeholderIconColor="#007aff"
            selectedValue={undefined}
            style={{}}>
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Unspecified" value="unspecified" />
          </Picker>
        </Col>
      </Grid>
      <Grid style={{ ...commonStyles.px_7, ...commonStyles.mb_10 }}>
        <Col>
          <Grid
            style={{
              ...commonStyles.bg_white,
              ...commonStyles.rounded_10,
              paddingTop: 10,
              paddingBottom: 10,
            }}>
            <Col style={{ paddingLeft: 7, justifyContent: 'center' }}>
              <Text textAlignVertical="bottom" numberOfLines={1}>
                Disconnect from Facebook
              </Text>
            </Col>
            <Col style={{ width: 'auto', justifyContent: 'center' }}>
              <Switch value />
            </Col>
          </Grid>
        </Col>
      </Grid>
      <Grid style={{ ...commonStyles.px_7, ...commonStyles.mb_10 }}>
        <Col>
          <Button full info style={commonStyles.rounded_10}>
            <Text>Create page</Text>
            <Icon type="FontAwesome" name="plus-circle" />
          </Button>
        </Col>
      </Grid>

      <ProfilesCard cardText="Saved card" />

      <Grid
        style={{
          ...commonStyles.px_7,
          ...styles.mt_7,
          ...commonStyles.mb_10,
        }}>
        <Col>
          <Button
            onPress={logOut}
            full
            info
            style={{ ...commonStyles.rounded_10, ...commonStyles.my_10 }}>
            <Text>Logout</Text>
            <Icon type="FontAwesome" name="sign-out" />
          </Button>
        </Col>
      </Grid>
    </Content>
  </Container>
);

ProfilePage.propTypes = {
  logOut: PropTypes.func.isRequired,
};

export default ProfilePage;
