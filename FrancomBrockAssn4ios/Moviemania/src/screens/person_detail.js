import React from 'react';
import { FlatList, StyleSheet, Image } from 'react-native';
import { Container, Content, Thumbnail, ListItem, Text } from 'native-base';
import MovieService from '../services/fetch_api';

export default class PersonDetail extends React.Component {
  state = {
    person: [],
    movies: [],
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
      const person = await MovieService.search('personDetails', this.props.route.params.item.id, null);
      const movies = await MovieService.search('movies', this.props.route.params.item.id, null);
      this.setState({person:person, movies:movies.results});
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const person = this.state.person;
    const styles = this.styles;
    return(
      <Container>
        <Text style={styles.title}>
          {person.name}
        </Text>

        <Container style={styles.containerBiggest}>
          <Content>
            <Image style={styles.image} source={{uri: `https://image.tmdb.org/t/p/w500/${person.profile_path}?api_key=9b5dc2dda3f6349ac5ed0db1bf3e04cf`}} />
            <Text>{person.biography+'\n'}</Text>
          </Content>
        </Container>

        <Container style={styles.containerRow}>
          <Text style={styles.container}>
            {'Popularity:\n'+person.popularity}
          </Text>
          <Text style={styles.container}>
            {'Born:\n'+person.birthday}
          </Text>
          <Text style={styles.container}>
            {'Died:\n'+person.deathday}
          </Text>
        </Container>

        <Container style={styles.containerBig}>
          <FlatList
            horizontial
            data={this.state.movies}
            keyExtractor={movies => movies.title+movies.id}
            renderItem={(itemData) => {
              return (
                <ListItem button>
                    <Thumbnail square large
                      source={{uri: `https://image.tmdb.org/t/p/w92/${itemData.item.poster_path}?api_key=9b5dc2dda3f6349ac5ed0db1bf3e04cf`}}
                    />
                    <Text style={styles.container}>
                      {itemData.item.title}
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
