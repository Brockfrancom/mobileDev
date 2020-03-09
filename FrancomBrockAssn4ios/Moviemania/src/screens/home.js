import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from './search';
import Browse from './browse';

const Tab = createBottomTabNavigator();

export default class Home extends React.Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Browse" component={Browse} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
    );
  }
}
