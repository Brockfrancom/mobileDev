import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import CustomButton from './button2';

export default class LevelScreen extends React.Component {
  styles = StyleSheet.create({
    containerH: {
      backgroundColor: 'grey',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    heading: {
      marginTop: 110,
      fontSize: 40,
      padding: 30,
      fontWeight: '800',
    },
    info: {
      marginBottom: 20,
      padding: 10,
      fontSize: 20,
    }
  });

  render(){
    const{functions, level, winner } = this.props;
    let titleVar = "Start";
    let message = "Click the green box to gain points!"
    if (winner != null){
      if (winner){
        message = "Congratulations you're a winner!"
        if (this.props.level == 2){
          titleVar = "Play Again?";
        }
        else {
          titleVar = "Continue?";
        }
      }
      else {
        message = "You're a loser."
        titleVar = "Play Again?";
      }
    }
    return(
      <SafeAreaView style={this.styles.containerH}>
        <Text style={this.styles.heading}>Level {level}</Text>
        <Text style={this.styles.info}>{message}</Text>
        <CustomButton onPress={this.props.functions} title={titleVar}/>
      </SafeAreaView>
    );
  }
}
