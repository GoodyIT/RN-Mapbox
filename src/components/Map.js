import React from 'react';
import { View } from 'react-native';
import { MapView } from 'expo';
import { PropTypes } from 'prop-types';

const Map = ({ lat, lng }) => (
  <View>
    <MapView
      style={{
        flex: 1,
        height: 130,
      }}
      initialRegion={{
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  </View>
);
Map.propTypes = {
  lat: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  lng: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};
export default Map;
