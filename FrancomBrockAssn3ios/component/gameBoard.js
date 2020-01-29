import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CustomButton from './button'
import GameRow from './gameRow'

export default class GameBoard extends React.Component {
  styles = StyleSheet.create({
  });

  render() {
    const { styles } = this;
    const { functions, level, x, y } = this.props;
    return (
      <>
        <GameRow level={this.props.level} x={this.props.x} y={this.props.y} myY={0} functions={this.props.functions}/>
        <GameRow level={this.props.level} x={this.props.x} y={this.props.y} myY={1} functions={this.props.functions}/>
        <GameRow level={this.props.level} x={this.props.x} y={this.props.y} myY={2} functions={this.props.functions}/>
        <GameRow level={this.props.level} x={this.props.x} y={this.props.y} myY={3} functions={this.props.functions}/>
        <GameRow level={this.props.level} x={this.props.x} y={this.props.y} myY={4} functions={this.props.functions}/>
        <GameRow level={this.props.level} x={this.props.x} y={this.props.y} myY={5} functions={this.props.functions}/>
        <GameRow level={this.props.level} x={this.props.x} y={this.props.y} myY={6} functions={this.props.functions}/>
        <GameRow level={this.props.level} x={this.props.x} y={this.props.y} myY={7} functions={this.props.functions}/>
      </>
    );
  }
}
