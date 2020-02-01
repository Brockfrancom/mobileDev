import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import Status from './component/status';
import GameBoard from './component/gameBoard';
import LevelScreen from './component/levelScreen'

export default class App extends React.Component {
  state = {
    score: 0,
    timer: 10,
    levelScreen: true,
    level: 1,
    winner: null,
  }
  timerVar = null;
  componentWillUnmount() {
    clearInterval(timerVar);
  }
  increment = (state) => {
    this.setState((state) => {
      this.state.score += 1;
      return(state);
    });
  }
  lose = (state) => {
    this.setState((state) => {
      clearInterval(timerVar);
      state.timer = 10;
      state.winner = false;
      state.score = 0;
      state.level = 1;
      state.levelScreen = true;
      return(state);
    });
  }
  functionForTimer = (state) => {
    const newState = {...state};
    newState.levelScreen = true;
    newState.score = 0;
    newState.timer = 10;
    if(state.score >= 15 && state.level == 1){
      newState.level += 1;
      newState.winner = true;
      return newState;
    }
    else if(state.score >= 20 && state.level == 2){
      newState.level = 1;
      newState.winner = true;
      return newState;
    }
    newState.winner = false;
    newState.level = 1;
    return newState;
  }
  update = () => {
    this.setState((state) => {
      const newState = { ...state };
      newState.timer -= 1;
      if(newState.timer == 0) {
        clearInterval(timerVar);
        return this.functionForTimer(newState);
      }
      return newState;
    });
  }
  start = (state) => {
    this.setState((state) => {
      const newState = {...state};
      newState.levelScreen = false;
      timerVar = setInterval(this.update,1000);
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
            score={this.state.score}
            level={this.state.level}
            x={(Math.floor(Math.random(0,1)*10)%5)}
            y={(Math.floor(Math.random(0,1)*10)%8)}
            functions={[this.increment, this.lose]}
          />
        </SafeAreaView>
      </>
    );
  }
}
