import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Button from './common/button'

export default class Profile extends React.Component {
  styles = StyleSheet.create({
    name: {
      fontSize: 24,
      fontWeight: '600',
      margin: 20,
      alignSelf: 'center',
    },
  });

  recordActivity = () => {

  }
  viewActivities = () => {

  }
  rewards = () => {

  }
  profile = () => {

  }

  render() {
    return (
      <View>
        <Text style={this.styles.name}>Welcome, Brock!</Text>
        <Button title="Record New Activity" onPress={this.recordActivity}/>
        <Button title="View Activities" onPress={this.viewActivities}/>
        <Button title="Profile" onPress={this.profile}/>
      </View>
    );
  }
}
