import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { StyleSheet, FlatList, Switch } from 'react-native';
import { Container, Text, ListItem, Content, Input, Thumbnail, Item, Form, Button } from 'native-base';
import { createItem } from '../actions/lists';

export class ItemForm extends React.Component {
  state = {
    items: [],
  }

  styles = StyleSheet.create({
    margins:{
      margin: 5,
    },
  });

  update = (key, value) => this.setState({ [key]: value })

  save = () => {
    this.props.createItem(
      this.props.list,
      this.state.newItem,
    );
  }

render() {
  return(
    <Container>
      <Form>
        <Item rounded style={this.styles.margins}>
          <Input
            onChangeText={newText => this.setState({ newItem: newText })}
          />
        </Item>
      </Form>
      <Container style={this.styles.saveButtonContainer}>
        <Button onPress={this.save}><Text>Save</Text></Button>
      </Container>
    </Container>
    );
  }
}

const mapPropsToDispatch = {
  createItem,
};

export default connect(null, mapPropsToDispatch)(ItemForm);
