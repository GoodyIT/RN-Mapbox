import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { Card, CardItem, Title } from 'native-base';
import { Grid } from 'react-native-easy-grid';
import { commonStyles } from '../modules';

const ProfilesCard = ({ cardText }) => (
  <Grid style={{ flexDirection: 'column', ...commonStyles.px_7 }}>
    <Card style={{ ...commonStyles.rounded_10 }}>
      <CardItem cardBody style={{ ...commonStyles.rounded_10, position: 'relative' }}>
        <Image
          source={{
            uri:
              'http://latarderm.blob.core.windows.net/images/2016/12/28/entrale281-focus-0-0-628-524.jpg',
          }}
          style={{
            height: 120,
            width: null,
            flex: 1,
            ...commonStyles.rounded_10,
          }}
        />
        <View
          style={{
            ...commonStyles.rounded_10,
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: '#00000045',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <Title
            style={{
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {cardText}
          </Title>
        </View>
      </CardItem>
    </Card>
    <Card style={{ ...commonStyles.rounded_10 }}>
      <CardItem cardBody style={{ ...commonStyles.rounded_10, position: 'relative' }}>
        <Image
          source={{
            uri:
              'http://latarderm.blob.core.windows.net/images/2016/12/28/entrale281-focus-0-0-628-524.jpg',
          }}
          style={{
            height: 120,
            width: null,
            flex: 1,
            ...commonStyles.rounded_10,
          }}
        />
        <View
          style={{
            ...commonStyles.rounded_10,
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: '#00000045',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <Title
            style={{
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {cardText}
          </Title>
        </View>
      </CardItem>
    </Card>
    <Card style={{ ...commonStyles.rounded_10 }}>
      <CardItem cardBody style={{ ...commonStyles.rounded_10, position: 'relative' }}>
        <Image
          source={{
            uri:
              'http://latarderm.blob.core.windows.net/images/2016/12/28/entrale281-focus-0-0-628-524.jpg',
          }}
          style={{
            height: 120,
            width: null,
            flex: 1,
            ...commonStyles.rounded_10,
          }}
        />
        <View
          style={{
            ...commonStyles.rounded_10,
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: '#00000045',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <Title
            style={{
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {cardText}
          </Title>
        </View>
      </CardItem>
    </Card>
    <Card style={{ ...commonStyles.rounded_10 }}>
      <CardItem cardBody style={{ ...commonStyles.rounded_10, position: 'relative' }}>
        <Image
          source={{
            uri:
              'http://latarderm.blob.core.windows.net/images/2016/12/28/entrale281-focus-0-0-628-524.jpg',
          }}
          style={{
            height: 120,
            width: null,
            flex: 1,
            ...commonStyles.rounded_10,
          }}
        />
        <View
          style={{
            ...commonStyles.rounded_10,
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: '#00000045',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <Title
            style={{
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {cardText}
          </Title>
        </View>
      </CardItem>
    </Card>
  </Grid>
);

ProfilesCard.propTypes = {
  cardText: PropTypes.string.isRequired,
};

export default ProfilesCard;
