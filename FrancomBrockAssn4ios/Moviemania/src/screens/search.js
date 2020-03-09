import React from 'react';
import _ from 'lodash';
import { StyleSheet, FlatList, Switch } from 'react-native';
import { Container, Text, ListItem, Content, Input, Thumbnail, Item } from 'native-base';
import MovieService from '../services/fetch_api';
import SegmentedControlIOS from '@react-native-community/segmented-control';
import MovieItem from '../components/movie_item';
import PersonItem from '../components/person_item';

export default class Search extends React.Component {
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

  constructor() {
    super();
    this.searchItems = _.debounce(this.searchItems,1000);
  }

  searchItems = async () => {
    try {
      const items = await MovieService.search(this.state.searchType, this.state.searchTerm, 1);
      this.setState({ items:items.results, loading: false, currentPage: 1 });
    } catch (e) {
      console.log(e);
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm === this.state.searchTerm) return;
    this.searchItems();
  }

  loadMoreItems = async () => {
    try{
      const newItems = await MovieService.search(this.state.searchType, this.state.searchTerm, this.state.currentPage + 1);
      this.setState((state) => {
        const newState = {...state};
        newState.items = [...state.items, ...newItems.results];
        newState.currentPage = state.currentPage + 1;
        if (newItems.length === 0) {
          newState.allLoaded = true;
        }
        return newState;
      })
    } catch (e) {
      console.log(e);
    }
  }

  changeSearchType = (value) => {
    if(this.state.searchType == 'searchMovies'){
      this.setState({ searchType:'searchPeople', switchValue:value, items:[], currentPage:1 });
      this.searchItems();
    }
    else{
      this.setState({ searchType:'searchMovies', switchValue:value, items:[], currentPage:1 });
      this.searchItems();
    }
  }

  render() {
    return(
      <Container>
        <Item rounded style={this.styles.margins}>
          <Input
            placeholder='Search...'
            onChangeText={newText => this.setState({ searchTerm: newText, items: [] })}
          />
        </Item>
        <SegmentedControlIOS
           values={['Movies', 'People']}
           selectedIndex={this.state.selectedIndex}
           style={this.styles.margins}
           onChange={event => {
             this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex}, this.changeSearchType);
           }}
         />
        <Container>
        <FlatList
          data={this.state.items}
          onEndReached={this.loadMoreItems}
          keyExtractor={items => (items.id).toString()}
          renderItem={(itemData) => {
            return (
              ((this.state.searchType == 'searchMovies') ? <MovieItem navigation={this.props.navigation} item={{itemData}}/> : <PersonItem navigation={this.props.navigation} item={{itemData}}/>)
            );
          }}
        />
        </Container>
      </Container>
    )
  }
}
