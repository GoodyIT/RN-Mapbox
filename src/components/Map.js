import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { PropTypes } from 'prop-types';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'

const { width, height } = Dimensions.get('window');

const Map = ({ lat, lng, customMapStyle, title }) => (
  <View style={styles.container}>
    <MapView
      // key={JSON.stringify(customMapStyle)}
      // provider={PROVIDER_GOOGLE}
      style={styles.mapContainer}
      initialRegion={{
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      customMapStyle={customMapStyle}
    >
      <Marker
        title={title}
        coordinate={{ latitude: lat, longitude: lng }}
      />
    </MapView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height - 200
  },
  mapContainer: {
    flex: 1
  }
})

Map.propTypes = {
  lat: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  lng: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  customMapStyle: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Map;
