import React from 'react';
import { connect } from 'react-redux';
import { Container, Input, Form, Item, Label, Textarea, Button, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { createList } from './actions/lists';

export class CreateList extends React.Component {
  state = {
    title: '',
    icon: '',
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
      this.state.icon,
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
