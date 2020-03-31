import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { StyleSheet, FlatList, Switch } from 'react-native';
import { Container, Text, ListItem, Content, Input, Thumbnail, Item, Form, Button } from 'native-base';
import { createItem } from '../../actions/lists';
import ListsItem from '../list_component';
import ItemForm from '../add_item_form';
export class ListDetails extends React.Component {
  render() {
    console.log(this.props)
    return (
      <Container>
        <ItemForm list={this.props.list}/>
        <Container>
          <FlatList
            data={this.props.list.items}
            keyExtractor={item => `item_${item.id}`}
            renderItem={({item}) => (
              <ListsItem list={item} clickable={false}/>
            )}
          />
        </Container>
      </Container>
    );
  }
}

const select = (storeState, props) => {
  return {
    list: _.find(storeState.lists, {id: props.route.params.listID})
  }
}

export default connect(select)(ListDetails);
