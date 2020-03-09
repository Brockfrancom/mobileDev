import React from 'react';
import { connect } from 'react-redux';
import { createList } from '../../actions/add_list';
import { Container, Input, Form, Item, Label, Textarea, Button, Text } from 'native-base';
import { StyleSheet } from 'react-native';

export class CreateList extends React.Component {
  state = {
    title: '',
    description: '',
  }

  styles = StyleSheet.create({
    saveButtonContainer: {
      padding: 14,
      marginTop: 16,
    }
  })

  update = (key, value) => this.setState({ [key]: value })

  save = () => {
    this.props.createList(
      this.state.title,
      this.state.description,
    );
    this.props.navigation.goBack();
  }

  render() {
    return (
      <Container>
        <Form>
          <Item floatingLabel>
            <Label>Title</Label>
            <Input
              value={this.state.title}
              onChangeText={text => this.update('title', text)}
            />
          </Item>
          <Item floatingLabel>
            <Label>Description</Label>
            <Input
              value={this.state.description}
              onChangeText={text => this.update('description', text)}
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
  createList,
};

export default connect(null, mapPropsToDispatch)(CreateList);
