import React from 'react';
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

  render() {
    const { navigation } = this.props;
    const { navigate } = this.props;
    return (
      <View>
        <Text style={this.styles.name}>Welcome, Brock!</Text>
        <Button title="Record New Adventure" onPress={this.recordActivity}/>
        <Button title="View Adventures" onPress={this.viewActivities}/>
        <Button title="Goals" onPress={this.rewards}/>
      </View>
    );
  }
}
