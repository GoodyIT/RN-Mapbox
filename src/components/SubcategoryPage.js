import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Container, Content, Card, CardItem, Badge, Text, Button } from 'native-base';
import { commonStyles } from '../modules';

const styles = StyleSheet.create({
  cardBadge: {
    position: 'absolute',
    right: '7%',
    bottom: '7%',
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: '#72E6D4',
    zIndex: 999,
  },
  cardRate: {
    color: 'white',
    fontSize: 25,
    top: 15,
  },
  categoryBtn: {
    borderRadius: 10,
    width: '97%',
    margin: 3,
    backgroundColor: '#2C464E',
  },
});

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const cardsUrl = [
      'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg',
      'http://www.russianweek.ca/wp-content/uploads/2014/01/hot-dogs.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg',
      'http://www.russianweek.ca/wp-content/uploads/2014/01/hot-dogs.jpg',
    ];

    const feedContent = cardsUrl.map((cardUrl, i) => (
      <Card
				key={i}  // eslint-disable-line
        style={{ ...commonStyles.rounded_10 }}>
        <CardItem cardBody style={{ ...commonStyles.rounded_10, position: 'relative' }}>
          <Image
            source={{
              uri:
                'https://atmedia.imgix.net/4b77d53b8d26c35896c7254ecf7db092f69cce5c?auto=format&q=45&w=500.0&h=333.0&fit=max&cs=strip',
            }}
            style={{
              height: 200,
              width: null,
              flex: 1,
              ...commonStyles.rounded_10,
            }}
          />
          <View
            style={{
              ...commonStyles.rounded_10,
              position: 'absolute',
              bottom: 0,
              left: 0,
              height: '100%',
              width: '100%',
              backgroundColor: '#00000045',
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                position: 'absolute',
                color: 'white',
                bottom: 10,
                left: 20,
                fontSize: 30,
              }}>
              Main Feed Hello
            </Text>
            <Badge style={styles.cardBadge}>
              <Text note style={styles.cardRate}>
                92
              </Text>
            </Badge>
          </View>
        </CardItem>
      </Card>
    ));
    return (
      <Container>
        <Content>
          <Button style={styles.categoryBtn}>
            <Text>Category</Text>
          </Button>
          <Button style={styles.categoryBtn}>
            <Text>Category</Text>
          </Button>
          <Button style={styles.categoryBtn}>
            <Text>Category</Text>
          </Button>
          <Button style={styles.categoryBtn}>
            <Text>Category</Text>
          </Button>
          <Button style={styles.categoryBtn}>
            <Text>Category</Text>
          </Button>
          <Card>{feedContent}</Card>
        </Content>
      </Container>
    );
  }
}
