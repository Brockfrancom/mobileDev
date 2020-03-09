import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/home';
import List from './src/screens/list';
import MovieDetail from './src/screens/movie_detail';
import PersonDetail from './src/screens/person_detail';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen
            name="List"
            component={List}
            options={({ route }) => ({ title: route.params.genreName})}
          />
          <Stack.Screen
            name="MovieDetail"
            component={MovieDetail}
            options={({ route }) => ({ title: route.params.item.title})}
          />
          <Stack.Screen
            name="PersonDetail"
            component={PersonDetail}
            options={({ route }) => ({ title: route.params.item.name})}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
