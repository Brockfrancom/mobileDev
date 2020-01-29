import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  Text,
} from 'react-native';
import Status from './component/status';
import CustomButton from './component/button';
import GameBoard from './component/gameBoard';
import LevelScreen from './component/levelScreen'

export default class App extends React.Component {
  state = {
    score: 0,
    timer: 10,
    levelScreen: true,
    level: 2,
    winner: null,
  }
  increment = (state) => {
    this.setState((state) => {
      this.state.score += 1;
      return(state);
    });
  }
  decrement = (state) => {
    this.setState((state) => {
      state.winner = false;
      state.score = 0;
      state.levelScreen = true;
      return(state);
    });
  }
  // update = (state) => {
  //   this.setState((state) => {
  //     const newState = { ...state };
  //     //newState.timer -= 1;
  //     return newState;
  //   });
  // }
  start = (state) => {
    this.setState((state) => {
      const newState = { ...state };
      //This allows you to move from level one to two.
      if(state.level == 2 && state.winner != null){
        newState.level = 1;
      }
      newState.score = 0;
      newState.levelScreen = false;
      //setInterval(this.update(newState),1);
      return newState;
    });
  }
  functionForTimer = (state) => {
    this.setState((state) => {
      const newState = { ...state };
      if(state.score >= 10 && state.level == 1){
        newState.level += 1;
        newState.winner = true;
      }
      else if(state.score >= 20 && state.level == 2){
        newState.winner = true;
      }
      newState.levelScreen = true;
      newState.score = 0;
      return newState;
    });
  }
  styles = StyleSheet.create({
    containerH: {
      backgroundColor: 'grey',
      borderColor: 'black',
      borderWidth: 2,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
  render() {
    const { styles } = this;
    if (this.state.levelScreen){
      return(
        <LevelScreen
          functions={this.start}
          winner={this.state.winner}
          level={this.state.level}
        />
      );
    }
    return (
      <>
        <StatusBar barStyle="dark-content"/>
        <SafeAreaView style={{flex: 1, backgroundColor: 'grey'}}>
          <View style={styles.containerH}>
            <Status score={this.state.score} timer={this.state.timer}/>
          </View>
          <GameBoard
            level={this.state.level}
            x={(Math.floor(Math.random(0,1)*10)%5)}
            y={(Math.floor(Math.random(0,1)*10)%8)}
            functions={[this.increment, this.decrement]}
          />
        </SafeAreaView>
      </>
    );
  }
}
