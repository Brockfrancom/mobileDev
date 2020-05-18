import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { Button, Text, Container } from 'native-base';
import { StyleSheet } from 'react-native';
// import Lists from './src/components/screens/lists';
// import ListDetails from './src/components/screens/list_details';
// import CreateList from './src/components/screens/create_list';
import store from './components/store/store';
//import Button from './components/common/button';
import Menu from './components/menu';
import Profile from './components/profile';

const Stack = createStackNavigator();

export default class App extends React.Component {
 render() {
   return (
     <Provider store={store}>
       <NavigationContainer>
         <Stack.Navigator>
           <Stack.Screen name="Menu" component={Menu}/>
           <Stack.Screen name="Record Adventure" component={Menu}/>
           <Stack.Screen name="View Adventures" component={Menu}/>
           <Stack.Screen name="Goals" component={Menu}/>
         </Stack.Navigator>
       </NavigationContainer>
     </Provider>
   );
 }
}
