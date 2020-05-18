import React from 'react';
import { connect } from 'react-redux';
import { Container, Text, H1, Button } from 'native-base';
import { FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import ListsItem from './list_component';
import { getLists } from './actions/lists';

export class Goals extends React.Component {
  styles = StyleSheet.create({
    message: {
      alignItems: 'center',
      padding: 16,
    },
    buttonStyle:{
      padding:16,
      margin: 20,
    }
  })

  // async componentDidMount() {
  //   await AsyncStorage.clear()
  // }

  // async componentDidMount(){
  //     this.props.getLists();
  // }

  render() {
    if (this.props.lists.length === 0) {
      return (
        <Container style={this.styles.message}>
          <H1>Welcome!</H1>
          <Text>You do not have any goals yet, click the button to make a new goal.</Text>
          <Button style={this.styles.buttonStyle} onPress={() => this.props.navigation.navigate("Create Goal")}><Text>Create Goal</Text></Button>
        </Container>
      )
    }

    return (
      <Container>
        <Button style={this.styles.buttonStyle} onPress={() => this.props.navigation.navigate("Create Goal")}><Text>Create Goal</Text></Button>
        <FlatList
          data={this.props.lists}
          keyExtractor={item => `list_${item.id}`}
          renderItem={({item}) => (
            <ListsItem
              navigation={()=> this.props.navigation.navigate("List Details", { listID: item.id})}
              list={item}
              clickable={true}
          />
          )}
        />
      </Container>
    );
  }
}

select = (storeState) => {
  return {
    lists: storeState.lists,
  }
};

export default connect(select, { getLists })(Goals);
