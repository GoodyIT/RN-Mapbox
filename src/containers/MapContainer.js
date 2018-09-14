import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

class MapPage extends React.Component {
    constructor(pros) {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <MapboxGL.MapView
                    showUserLocation={true}
                    userTrackingMode={MapboxGL.UserTrackingModes.Follow}
                    style={styles.container}
                    styleURL={'mapbox://styles/mapbox/light-v9'}
                    zoomLevel={12} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default MapPage;

