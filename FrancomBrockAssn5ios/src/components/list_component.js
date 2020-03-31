import React from 'react';
import { Text, View , StyleSheet, TouchableOpacity } from 'react-native';
import { SwipeRow } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class ListsItem extends React.Component {
  styles = StyleSheet.create({
    base:{
      backgroundColor: 'white',
      height: 64,
      borderBottomWidth: 1,
    },
    hidden:{
      flexDirection: 'row',
      padding: 0,
    },
    visible:{
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexDirection: 'row',
      flex:1,
      alignSelf: 'center',
      padding:5,
    },
    visibleTitle:{
      flex:7,
    },
    deleteButton:{
      flex: 1,
      backgroundColor: 'red',
      height: 64,
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingLeft: 16,
    },
    whiteText:{
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
    },
    editButton:{
      flex: 1,
      backgroundColor: 'blue',
      height: 64,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingRight: 16,
    },
  })

  render() {
    return (
      <SwipeRow
        rightOpenValue={-125}
        leftOpenValue={125}
        stopRightSwipe={-145}
        stopLeftSwipe={145}
        disableRightSwipe={false}
        onRowPress={() => {if(this.props.clickable)this.props.navigation()}}
        >
        <View style={[this.styles.base, this.styles.hidden]}>
          {/*Hidden*/}
          <TouchableOpacity style={this.styles.deleteButton}>
            <Text style ={this.styles.whiteText}>DELETE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={this.styles.editButton}>
            <Text style ={this.styles.whiteText}>MODIFY</Text>
          </TouchableOpacity>
        </View>
        {/*Visible*/}
        <View style={[this.styles.base, this.styles.visible]}>
          <Icon style={[this.styles.visible]} name={'rocket'} size={30} color="black"/>
          <Text style={[this.styles.visible, this.styles.visibleTitle]}>{this.props.list.title|| this.props.list}</Text>
        </View>
      </SwipeRow>
    );
  }
}
