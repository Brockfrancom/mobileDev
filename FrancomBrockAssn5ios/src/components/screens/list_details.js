import React from 'react';
import _ from 'lodash';
import { StyleSheet, FlatList, Switch } from 'react-native';
import { Container, Text, ListItem, Content, Input, Thumbnail, Item } from 'native-base';

export default class ListDetails extends React.Component {
  state = {
    items: [],
    currentPage: 1,
    searchType: 'searchMovies',
    selectedIndex: 0,
  }

  styles = StyleSheet.create({
    margins:{
      margin: 5,
    },
  });

  async componentDidUpdate(prevProps, prevState) {
  }

  render() {
    return(
      <Container>
      </Container>
    )
  }
}
