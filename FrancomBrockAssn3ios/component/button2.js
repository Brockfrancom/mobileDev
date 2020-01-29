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
      fontSize: 20,
      fontWeight: '600',
      backgroundColor: 'green',
      borderRadius: 5,
      margin: 2,
      borderColor: 'black',
      borderWidth: 2,
      padding: 15,
    },
  });
  render() {
    const { title, onPress } = this.props;
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View>
          <Text style={this.styles.buttonW}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
