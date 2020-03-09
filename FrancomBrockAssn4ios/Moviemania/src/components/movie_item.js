import React from 'react';
import _ from 'lodash';
import { StyleSheet, FlatList } from 'react-native';
import { Container, Text, ListItem, Content, Input, Thumbnail, Item } from 'native-base';


export default class MovieItem extends React.Component {
  styles = StyleSheet.create({
    container:{
      flex:1,
      marginLeft:10,
    },
    bold:{
      fontWeight: 'bold',
    },
  });

  render() {
    const itemData = this.props.item.itemData;
    return (
      <ListItem
        button
        onPress={()=> this.props.navigation.navigate("MovieDetail", { item: itemData.item})}>
        <Thumbnail square large source={{uri: `https://image.tmdb.org/t/p/w92/${itemData.item.poster_path}?api_key=9b5dc2dda3f6349ac5ed0db1bf3e04cf`}} />
        <Text numberOfLines={5} ellipsizeMode='tail'
          style={this.styles.container}>
          <Text style={this.styles.bold}>{itemData.item.title}</Text>
          <Text >{
            '\nReleased: '+
            itemData.item.release_date+
            '\nRating: '+
            itemData.item.vote_average+
            '/10\n'+
            itemData.item.overview}
          </Text>
        </Text>
      </ListItem>
    );
  }
}
