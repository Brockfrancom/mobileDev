import React from 'react';
import _ from 'lodash';
import { StyleSheet, FlatList } from 'react-native';
import { Container, Text, ListItem, Content, Input, Thumbnail, Item } from 'native-base';


export default class PersonItem extends React.Component {
  state = {
    items: [],
    currentPage: 1,
    searchType: 'searchMovies',
    selectedIndex: 0,
  }

  styles = StyleSheet.create({
    container:{
      flex:1,
      marginLeft:10,
    },
    bold:{
      fontWeight: 'bold',
    },
    margins:{
      margin: 5,
    },
  });

  render() {
    const itemData = this.props.item.itemData;
    return (
      <ListItem
        button
        onPress={()=> this.props.navigation.navigate("PersonDetail", { item: itemData.item})}>
        <Thumbnail square large source={{uri: `https://image.tmdb.org/t/p/w92/${itemData.item.profile_path}?api_key=9b5dc2dda3f6349ac5ed0db1bf3e04cf`}} />
        <Text numberOfLines={5} ellipsizeMode='tail'
          style={this.styles.container}>
          <Text style={this.styles.bold}>{itemData.item.name}</Text>
          <Text >{
            '\nPopularity: '+
            itemData.item.popularity}
          </Text>
        </Text>
      </ListItem>
    );
  }
}
