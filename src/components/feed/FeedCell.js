// @flow 

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import RoundedImage from '../RoundedImage';
import Video from 'react-native-video';

type Props = {
  userImg: string,
  userName: string,
  bodyImg?: string,
  bodyTxt?: string,
  bodyVideoUrl?: string,
  bodyVideoPoster?: string
}

const FeedCell = (props: Props) => {

  const [width, setWidth] = useState(Dimensions.get('window').width) 
  
  function calculateRatioHeight(width){ return Math.round((width/16)*9); }

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <RoundedImage />
        <View style={[styles.channelInfoWrapper, { width: width - 90 }]}>  
          <Text numberOfLines={1} ellipsizeMode='tail' style={styles.channelName}>
            asldkjaslkdjalsdjalksdjaldkjalskdjalsdkjalskdjalsdkjasldkjalsdkjasldkjasd
          </Text>
        </View>
      </View>
      <View>
        { props.bodyTxt && 
          <Text>{`${props.bodyTxt}`}</Text> }
      </View>
      <View>
        { props.bodyImg && 
          <Image style={{width: width, height: 10}} source={{ uri: `${props.bodyImg}` }} /> }
      </View>
      <View>
        { props.bodyVideoUrl && 
          <Video 
            paused={true} 
            style={{width: width - 90, height: calculateRatioHeight(width - 90)}} 
            source={{ uri: `${props.bodyVideoUrl}` }} 
          /> 
        }
      </View>
    </View>
  )
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


export default FeedCell;