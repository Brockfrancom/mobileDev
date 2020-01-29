import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CustomButton from './button'

export default class GameRow extends React.Component {
  styles = StyleSheet.create({
    containerH: {
      backgroundColor: 'grey',
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    redButton: {
      backgroundColor: 'red'
    }
  });

  render() {
    const { styles } = this;
    const { functions, x, y, myY, level } = this.props;
    return (
      <View style={styles.containerH}>
        <CustomButton level={this.props.level} x={this.props.x} y={this.props.y} myY={this.props.myY} myX={0} onPress={this.props.functions} title=""/>
        <CustomButton level={this.props.level} x={this.props.x} y={this.props.y} myY={this.props.myY} myX={1} onPress={this.props.functions} title=""/>
        <CustomButton level={this.props.level} x={this.props.x} y={this.props.y} myY={this.props.myY} myX={2} onPress={this.props.functions} title=""/>
        <CustomButton level={this.props.level} x={this.props.x} y={this.props.y} myY={this.props.myY} myX={3} onPress={this.props.functions} title=""/>
        <CustomButton level={this.props.level} x={this.props.x} y={this.props.y} myY={this.props.myY} myX={4} onPress={this.props.functions} title=""/>
      </View>
    );
  }
}
