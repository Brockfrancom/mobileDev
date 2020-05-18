import React from 'react';
import { Text, StyleSheet, Image, Button, SafeAreaView, View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { Provider } from 'react-redux';
import MapView, { Marker, Circle, Polyline, Callout } from 'react-native-maps';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';

export default class RecordAdventure extends React.Component {
  styles = StyleSheet.create({
    flex: {
      flex: 1,
    }
  })

  state = {
    currentPosition: null,
    markers: null,
    coordinates: [],
  }

  // Use this function to clear the database if you want.
  // async componentDidMount() {
  //   await AsyncStorage.clear()
  // }

  async componentDidMount() {
    //this.props.getMarkers();
    console.log(this.props);
    // this.setState({markers:this.props.markers})
    Geolocation.watchPosition(
      ({ coords }) => {
        this.setState((state) => ({
          currentPosition: {
            ...coords,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          },
          coordinates: [
            ...state.coordinates,
            { latitude: coords.latitude, longitude: coords.longitude }
          ],
        }))
      },
      console.log,
      {
        enableHighAccuracy: true,
        distanceFilter: 10,
      }
    );
  }

  // save = (coordinate) => {
  //   this.props.createMarker(
  //     {
  //       coordinate: coordinate,
  //       title: 'We clicked this spot!!!',
  //       description: 'A cool spot.',
  //     }
  //   );
  // }

  // onMapPress = (e) => {
  //   const { coordinate } = e.nativeEvent;
  //   this.save(coordinate);
  //   this.setState((state) => {
  //     return {
  //       markers: [
  //         ...state.markers,
  //         {
  //           coordinate: coordinate,
  //           title: 'We clicked this spot!!!',
  //           description: 'A cool spot.',
  //         }
  //       ]
  //     }
  //   });
  // }

  render() {
    if (!this.state.currentPosition) return null;
    console.log(this.props)
    return (
      <View style={this.styles.flex}>
        <MapView
          style={this.styles.flex}
          initialRegion={this.state.currentPosition}
          onPress={this.onMapPress}
          >
          <Polyline
            coordinates={this.state.coordinates}
            strokeWidth={5}
            strokeColor="blue"
          />
          <Marker
            onPress={e => e.stopPropagation()}
            coordinate={this.state.currentPosition}
            title="Your Current Location"
            description="Cool spot."
            >
            <Callout>
              <Text>This is your position.</Text>
            </Callout>
          </Marker>
        </MapView>
      </View>
    );
  }
}

// {
//   this.props.markers.map(marker => (
//     <Marker
//       onPress={e => e.stopPropagation()}
//       key={`${marker.coordinate.longitude}_${marker.coordinate.latitude}`}
//       {...marker}
//     />
//   ))
// }
