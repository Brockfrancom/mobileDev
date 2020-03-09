import React from 'react';
import { connect } from 'react-redux';
import { Container, Text, H1 } from 'native-base';
import { FlatList, StyleSheet } from 'react-native';
import ListsItem from '../list_component';

export class Lists extends React.Component {
  styles = StyleSheet.create({
    message: {
      alignItems: 'center',
      padding: 16,
    }
  })

  render() {
    if (this.props.lists.length === 0) {
      return (
        <Container style={this.styles.message}>
          <H1>Welcome!</H1>
          <Text>You do not have any lists yet, click the "New" button at the top to add a new list.</Text>
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
              navigation={()=> this.props.navigation.navigate("List Details", { list: this.props.list})}
              list={item} />
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

// select = ({ lists }) => ({ lists });

export default connect(select)(Lists);
