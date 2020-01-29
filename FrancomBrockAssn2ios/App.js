import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  Text,
} from 'react-native';
import Counter from './component/counter'
import CustomButton from './component/button'

export default class App extends React.Component {
  state = {
    count: 0,
  }
  increment = (state) => {
    this.setState((state) => {
      this.state.count = (this.state.count + 1);
      return(state);
    });
  }
  decrement = (state) => {
    this.setState((state) => {
      this.state.count = (this.state.count - 1);
      return(state);
    });
  }
  styles = StyleSheet.create({
    container: {
      marginTop: 70,
      alignItems: 'center',
    },
    redButton: {
      backgroundColor: 'red'
    }
  });
  render() {
    const { styles } = this;
    return (
      <>
        <StatusBar barStyle="dark-content"/>
        <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <CustomButton onPress={this.increment} title="Increase count"/>
            <Counter count={this.state.count}/>
            <CustomButton style={this.styles.redButton} title="Decrease count" onPress={this.decrement}/>
          </View>
        </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
