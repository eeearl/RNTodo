import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

class StoryCell extends Component {

  state = { channelInfoWidth: Dimensions.get('window').width }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <TouchableOpacity
            style={[styles.symbolIcon]}>
            </TouchableOpacity>
          <View style={[styles.channelInfoWrapper, { width: this.state.channelInfoWidth - 90 }]}>  
            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.channelName}>
              asldkjaslkdjalsdjalksdjaldkjalskdjalsdkjalskdjalsdkjasldkjalsdkjasldkjasd
            </Text>
          </View>
        </View>
        <Text>
          {`asdfasfsfsdfsf
          asdfasfsfsdfsfasdf
          
          asdfasfsfsdfsfasdfsdflkaslfkjaslfdkjaslkfjdaslkdfjasldkfjsldkfjlksdfjlskfasjflksjflkjasldfkjaslfkjaslfjkaslkfdjlaskj`}
        </Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  header: {
    marginBottom: 10,
    flexDirection: 'row'
  },
  symbolIcon: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:50,
    height:50,
    borderRadius:100,
  },
  channelInfoWrapper: {
    marginHorizontal: 10,
    justifyContent: 'center'
  },
  channelName: {
    alignSelf: 'stretch',
    fontWeight: 'bold'
  }
});


export default StoryCell;