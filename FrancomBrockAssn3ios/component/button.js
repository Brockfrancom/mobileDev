import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class CustomButton extends React.Component {
  styles = StyleSheet.create({
    buttonW: {
      backgroundColor: 'green',
      borderRadius: 10,
      flex: 1,
      margin: 3,
      borderColor: 'black',
      borderWidth: 2,
      padding: 27,
    },
    buttonL: {
      borderRadius: 10,
      flex: 1,
      margin: 3,
      borderColor: 'black',
      borderWidth: 2,
      padding: 27,
    },
    buttonL1: {
      borderRadius: 10,
      flex: 1,
      margin: 3,
      borderWidth: 2,
      padding: 27,
      opacity: 0,
    },
  });
  render() {
    const { title, onPress, x, y, myX, myY, level } = this.props;
    let theFunction = 1;
    let theStyle = [this.styles.buttonL, {backgroundColor:'rgb('+((Math.random()*1000)%255)+','+
                            ((Math.random()*1000)%50)+','+
                            ((Math.random()*1000)%255)+')'}];
    if(this.props.myX === this.props.x && this.props.myY === this.props.y){
      theFunction = 0;
      theStyle = this.styles.buttonW;
    }
    else if(this.props.level == 1){
      theStyle = this.styles.buttonL1;
      theFunction = {};
    }
    return (
      <TouchableOpacity onPress={this.props.onPress[theFunction]}>
        <View style={theStyle}>
          <Text>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
