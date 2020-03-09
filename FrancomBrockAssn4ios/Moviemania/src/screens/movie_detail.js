import React from 'react';
import { FlatList, StyleSheet, Image, ScrollView } from 'react-native';
import { Container, Content, Thumbnail, ListItem, Text } from 'native-base';
import MovieService from '../services/fetch_api';

export default class MovieDetail extends React.Component {
  state = {
    item: [],
    actors: [],
    genres: '',
  }

  styles = StyleSheet.create({
    container:{
      flex:1,
    },
    containerBig:{
      flex:2,
    },
    containerBiggest:{
      flex:3,
    },
    containerRow:{
      flex:1,
      flexDirection:'row',
      alignItems: 'center',
    },
    bold:{
      fontWeight: 'bold',
    },
    title:{
      fontWeight: 'bold',
      textAlign:'center',
      fontSize:25,
    },
    image:{
      width: '80%',
      height: 150,
      alignSelf: 'center'
    },
  });

  async componentDidMount() {
    try {
      const actors = await MovieService.search('cast', this.props.route.params.item.id, null);
      const item = await MovieService.search('movieDetails', this.props.route.params.item.id, null);
      var genres = '';
      for(var i=0; i < item.genres.length; i++){
        genres = genres + ' ' + item.genres[i].name;
      }
      this.setState({actors:actors.cast, item:item, genres:genres});
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const item = this.state.item;
    const styles = this.styles;
    return(
      <Container>
        <Text style={styles.title}>
          {item.title}
        </Text>

        <Container style={styles.containerBiggest}>
          <Content>
            <Image style={styles.image} source={{uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}?api_key=9b5dc2dda3f6349ac5ed0db1bf3e04cf`}} />
            <Text>{item.overview+'\n'}</Text>
          </Content>
        </Container>

        <Container style={styles.containerRow}>
          <Text style={styles.container}>
            {'Rating\n'+item.vote_average+'/10'}
          </Text>
          <Text style={styles.container}>
            {'Released\n'+item.release_date}
          </Text>
          <Text style={styles.container}>
            {'Genres: '+this.state.genres}
          </Text>
        </Container>

        <Container style={styles.containerRow}>
          <Text style={styles.container}>
            {'Budget: '+item.budget}
          </Text>
          <Text style={styles.container}>
            {'Revenue: '+item.revenue}
          </Text>
        </Container>

        <Container style={styles.containerBig}>
          <FlatList
            horizontial
            data={this.state.actors}
            keyExtractor={actors => actors.name+actors.id}
            renderItem={(itemData) => {
              return (
                <ListItem button>
                    <Thumbnail square large
                      source={{uri: `https://image.tmdb.org/t/p/w92/${itemData.item.profile_path}?api_key=9b5dc2dda3f6349ac5ed0db1bf3e04cf`}}
                    />
                    <Text style={styles.container}>
                      {itemData.item.name+'\n'+itemData.item.character}
                    </Text>
                </ListItem>
              );
            }}
          />
        </Container>
      </Container>
    )
  }
}
