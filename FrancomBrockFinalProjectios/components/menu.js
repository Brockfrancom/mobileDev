import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Button from './common/button';
import Profile from './profile';
import navigate from 'react-navigation';

export default class Menu extends React.Component {
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

  static navigationOptions = {
      title: 'Profile',
    };
  render() {
    const { navigation } = this.props;
    const { navigate } = this.props;
    return (
      <View>
        <Text style={this.styles.name}>Welcome, Brock!</Text>
        <Button title="Record New Activity" onPress={this.recordActivity}/>
        <Button title="View Activities" onPress={this.viewActivities}/>
        <Button title="Rewards" onPress={this.rewards}/>
        <Button title="Profile" onPress={() => navigate('Profile')}/>
      </View>
    );
  }
}
