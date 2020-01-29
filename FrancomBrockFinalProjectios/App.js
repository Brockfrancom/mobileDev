import React from 'react';
import {
 SafeAreaView,
 StyleSheet,
 View,
 StatusBar,
 ScrollView,
 Text,
} from 'react-native';
import Button from './components/common/button';
import Menu from './components/menu';
import Profile from './components/profile';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Profile: {screen: Profile},
});
const test = createAppContainer(MainNavigator)
export default class App extends React.Component {
 render() {
   const { styles } = this;
   return (
     <>
       <StatusBar barStyle="dark-content"/>
       <SafeAreaView>
       <ScrollView>
       <Menu navigate={MainNavigator}/>
       </ScrollView>
       </SafeAreaView>
     </>
   );
 }
}
