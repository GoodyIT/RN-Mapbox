import React from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import { Container, Content } from 'native-base';
import PlaceShortInfoModal from './PlaceShortInfoModal';
import PlaceCard from './PlaceCard';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const cardsUrl = [
  'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg',
  'http://www.russianweek.ca/wp-content/uploads/2014/01/hot-dogs.jpg',
  'https://cdn.cnn.com/cnnnext/dam/assets/171027052520-processed-foods-exlarge-tease.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTL5-HHStdLoZ1VOAH8VvdATzfgTVNUcjmltnb4NKnXVZ8Pp4',
];

class HomePage extends React.Component {
  state = {
    modalVisible: false,
    location: null,
    errMessage: null
  };

  componentWillMount() {
    // if (Platform.OS === 'android' && !Constants.isDevice) {
    //   this.setState({
    //     errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
    //   });
    // } else {
    //   this._getLocationAsync();
    // }
  }

  _getLocationAsync = async () => {
    // let { status } = await Permissions.askAsync(Permissions.LOCATION);
    // if (status !== 'granted') {
    //   this.setState({
    //     errorMessage: 'Permission to access location was denied',
    //   });
    // }

    // const location = await Location.getCurrentPositionAsync({});
    // this.setState({ location });
    // alert(JSON.stringify(location.coords))
  };

  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const { navigation } = this.props;
    const { modalVisible } = this.state;

    return (
      <Container style={{ paddingTop: getStatusBarHeight() }}>
        <Content style={{ paddingLeft: 7, paddingRight: 7, paddingBottom: 10 }}>
          <PlaceShortInfoModal
            {...this.props}
            visible={modalVisible}
            toggleVisibility={this.setModalVisible}
          />
          {cardsUrl.map(cardUrl => (
            <PlaceCard
              key={cardUrl}
              previewUrl={cardUrl}
              modalVisible={modalVisible}
              navigation={navigation}
              setModalVisible={this.setModalVisible}
            />
          ))}
        </Content>
      </Container>
    );
  }
}

HomePage.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomePage;
