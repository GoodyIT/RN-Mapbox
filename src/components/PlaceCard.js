import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Card, CardItem, Left, Text, Button, Icon, Right, Title } from 'native-base';

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
  },
  cardRate: {
    color: 'white',
    fontSize: 25,
    lineHeight: 50,
  },
  text_small: {
    fontSize: 10,
  },
});

const PlaceCard = props => {
  const { navigation, setModalVisible, previewUrl } = props;

  return (
    <TouchableWithoutFeedback
      disable={false}
      onPress={() => navigation.navigate('ProfilePage')}
      onLongPress={() => setModalVisible(true)}>
      <Card style={styles.card}>
        <CardItem cardBody>
          <Image source={{ uri: previewUrl }} style={{ height: 150, width: null, flex: 1 }} />
        </CardItem>
        <CardItem style={{ height: 45 }}>
          <Title style={{ color: '#333', fontSize: 28 }}>Restaurant name</Title>
        </CardItem>
        <CardItem style={{ height: 42 }}>
          <Left style={{ paddingBottom: 5 }}>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text style={styles.text_small}>12 Likes</Text>
            </Button>
          </Left>
          <Right style={{ paddingBottom: 5 }}>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text style={styles.text_small}>4 Comments</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    </TouchableWithoutFeedback>
  );
};

PlaceCard.propTypes = {
  navigation: PropTypes.object.isRequired,
  setModalVisible: PropTypes.func.isRequired,
  previewUrl: PropTypes.string.isRequired,
};

export default PlaceCard;
