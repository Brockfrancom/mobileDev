import React from 'react';
import { connect } from 'react-redux';
import { Container, Text, H1 } from 'native-base';
import { FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import ListsItem from '../list_component';
import { getLists } from '../../actions/lists';

export class Lists extends React.Component {
  styles = StyleSheet.create({
    message: {
      alignItems: 'center',
      padding: 16,
    }
  })

  // async componentDidMount() {
  //   await AsyncStorage.clear()
  // }

  async componentDidMount(){
      this.props.getLists();
  }

  render() {
    if (this.props.lists.length === 0) {
      return (
        <Container style={this.styles.message}>
          <H1>Welcome!</H1>
          <Text>You do not have any lists yet, click the "+" button at the top to add a new list.</Text>
        </Container>
      )
    }

    return (
      <Container>
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

export default connect(select, { getLists })(Lists);
