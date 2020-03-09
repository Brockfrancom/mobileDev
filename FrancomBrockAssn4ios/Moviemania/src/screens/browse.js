import React from 'react';
import { FlatList } from 'react-native';
import { Container, Text, ListItem } from 'native-base';
import MovieService from '../services/fetch_api'
import List from './list';

export default class Browse extends React.Component {
  state = {
     genres: [],
  }

  async componentDidMount() {
    this.getGenres();
  }

  async getGenres(){
    try{
      const genres = await MovieService.search('genres', 'none', 'none');
      this.setState(genres);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return(
      <Container>
        <FlatList
          data={this.state.genres}
          keyExtractor={genres => genres.name}
          renderItem={(itemData) => {
            return (
              <ListItem
                button
                onPress={()=> this.props.navigation.navigate("List", { searchTerm: itemData.item.id, searchType: 'searchGenres', genreName:itemData.item.name})}>
                <Text>{itemData.item.name}</Text>
              </ListItem>
            );
          }}
        />
      </Container>
    )
  }
}
