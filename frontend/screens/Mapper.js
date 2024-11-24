import React, { useEffect, useState } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service'; // Import geolocation service

const Mapper = () => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.72885, // Default coordinates
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });



  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={mapRegion} // Update region once we get the location
      >
        <Marker title="You" coordinate={mapRegion} />
      </MapView>
    </View>
  );
};

export default Mapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
  map: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 0.52,
    borderRadius: 20,
  },
});
