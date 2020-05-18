import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { View,Text,StyleSheet} from 'react-native';
import { Button,Container } from 'native-base';
import Menu from './components/menu';
import RecordAdventure from './components/recordAdventure';
import CreateGoal from './components/createGoal';
import store from './components/store/store';

const Stack = createStackNavigator();

export default class App extends React.Component {
  styles = StyleSheet.create({
    plus: {
      fontWeight:'800',
      fontSize:40,
      marginTop:-10,
    },
  })

 render() {
  return (
   <Provider store={store}>
     <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu}/>
        <Stack.Screen name="Record Adventure" component={RecordAdventure} />
        <Stack.Screen name="Create Goal" component={CreateGoal} />
       </Stack.Navigator>
     </NavigationContainer>
   </Provider>
  );
 }
}
