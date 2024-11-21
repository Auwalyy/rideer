import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

const Map = () => {
    const [mapRegion, setMaption] = useState({
        latitude: 11.7471,
        longitude: 8.5247
    });

    return (
        <View style={styles.container}>
           <MapView style={{ alignSelf: 'stretch',}}
           ></MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

