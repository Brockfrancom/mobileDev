import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Container, Header, Thumbnail, ListItem, Text } from 'native-base';
import MovieService from '../services/fetch_api';
import MovieItem from '../components/movie_item';

export default class List extends React.Component {
  state = {
    movies: [],
    currentPage: 1,
    loading: true,
    allLoaded: false,
    searchTerm: '',
    searchType: '',
  }

  styles = StyleSheet.create({
    container:{
      flex:1,
      marginLeft:10,
    },
    bold:{
      fontWeight: 'bold',
    }
  });

  async componentDidMount() {
    const params = this.props.route.params;
    try {
      const movies = await MovieService.search(params.searchType, params.searchTerm, 1);
      this.setState({
        movies:movies.results,
        loading:false,
        searchTerm:params.searchTerm,
        searchType:params.searchType,
        currentPage:1,
      });
    } catch (e) {
      console.log(e);
    }
  }

  loadMoreMovies = () => {
    if (this.state.loading) return;
    if (this.state.allLoaded) return;
    this.setState(
      { loading: true },
      async () => {
        try {
          const newMovies = await MovieService.search(this.state.searchType, this.state.searchTerm, this.state.currentPage + 1);
          this.setState((state) => {
            const newState = {...state};
            newState.movies = [...state.movies, ...newMovies.results];
            newState.currentPage = state.currentPage + 1;
            newState.loading = false;
            if (newMovies.results.length === 0) {
              newState.allLoaded = true;
            }
            return newState;
          });
        } catch(e) {
          console.log(e);
        }
      }
    )
  }

  render() {
    return(
      <Container>
        <FlatList
          data={this.state.movies}
          onEndReached={this.loadMoreMovies}
          keyExtractor={movies => (movies.id).toString()}
          renderItem={(itemData) => {
            return (
               <MovieItem navigation={this.props.navigation} item={{itemData}}/>
            );
          }}
        />
      </Container>
    )
  }
}
