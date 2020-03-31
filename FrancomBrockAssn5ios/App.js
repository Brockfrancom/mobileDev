import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { Button, Text, Container } from 'native-base';
import { StyleSheet } from 'react-native';
import Lists from './src/components/screens/lists';
import ListDetails from './src/components/screens/list_details';
import CreateList from './src/components/screens/create_list';
import store from './src/store/store';

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
            <Stack.Screen
              name="My Lists"
              component={Lists}
              options={({ navigation }) => ({
                headerRight: () => (
                  <Container>
                    <Button transparent onPress={() => navigation.navigate('Create List')}>
                      <Text style={this.styles.plus}>+</Text>
                    </Button>
                  </Container>
                )
              })}
            />
            <Stack.Screen name="Create List" component={CreateList} />
            <Stack.Screen name="List Details" component={ListDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
