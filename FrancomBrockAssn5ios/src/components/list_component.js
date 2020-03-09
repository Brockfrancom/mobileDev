import React from 'react';
import { ListItem, Text } from 'native-base';

export default class ListsItem extends React.Component {
  render() {
    console.log(this.props.navigation);
    return (
      <ListItem onPress={()=> this.props.navigation("List Details", { list: this.props.list})}>
        <Text>{this.props.list.title}</Text>
      </ListItem>
    );
  }
}
