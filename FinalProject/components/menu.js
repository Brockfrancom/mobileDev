import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View,Text,StyleSheet,Button } from 'react-native';
import ViewAdventures from './viewAdventures';
import Goals from './goals';

const Tab = createBottomTabNavigator();

export default class Menu extends React.Component {
  styles = StyleSheet.create({
    name: {
      fontSize: 24,
      fontWeight: '600',
      margin: 20,
      alignSelf: 'center',
    },
  });

  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="View Adventures" component={ViewAdventures} />
        <Tab.Screen name="Goals" component={Goals} />
      </Tab.Navigator>
    );
  }
}
