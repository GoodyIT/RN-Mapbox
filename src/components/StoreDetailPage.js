import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { PropTypes } from 'prop-types';
import Map from './Map';
import { MapCustomStyle } from '../config';

const { width, height } = Dimensions.get('window');

class StoreDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [
        'Standard',
        'Sliver',
        'Retro',
        'Dark',
        'Night'
      ],
      customMapStyle: []
    };
  }

  _renderItem = ({item, index}) => {
    return (
      <View style={styles.slideStyle}>
        <Text>{item}</Text>
      </View>
    )
  }

  _onSnapToItem = index => {
    this.setState({ customMapStyle: MapCustomStyle[index] });
  }

  render() {
    const { navigation } = this.props;
    const lat = navigation.getParam('lat');
    const lng = navigation.getParam('lng');
    const title = navigation.getParam('title');
    return (
      <View style={styles.container}>
        <Carousel
          data={this.state.colors}
          renderItem={this._renderItem}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={this._onSnapToItem}
        />
        <Map
          lat={lat}
          lng={lng}
          color={this.state.selectedColor}
          customMapStyle={this.state.customMapStyle}
          title={title}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  slideStyle: {
    width: width,
    height: 100,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

StoreDetailPage.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default StoreDetailPage;
