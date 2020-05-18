import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class Button extends React.Component {
  styles = StyleSheet.create({
    button: {
      fontSize: 24,
      fontWeight: '600',
      margin: 17,
      backgroundColor: '#0d6ffc',
      borderRadius: 30,
      alignSelf: 'center',
    },
  });

  render() {
    const { title, onPress, style } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[this.styles.button, this.props.style]}>
          <Text style={[this.styles.button, this.props.style]}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
