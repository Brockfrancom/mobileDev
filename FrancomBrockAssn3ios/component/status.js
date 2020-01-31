import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class Status extends React.Component {
  styles = StyleSheet.create({
    containerH: {
      backgroundColor: 'grey',
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    description: {
      fontSize: 20,
      fontWeight: '600',
      color: 'orange',
      textAlign: 'left',
      marginLeft: 50,
    },
  });
  render() {
    const { styles } = this;
    const { score, timer } = this.props;
    return (
      <View style={styles.containerH}>
          <Text style={styles.description}>Score: {score}</Text>
          <Text style={styles.description}>Timer: {timer}</Text>
      </View>
    );
  }
}
