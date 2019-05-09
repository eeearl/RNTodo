// @flow 

import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { Header } from 'react-navigation';
import SqaureDateDisplay from '../components/SqaureDateDisplay';
import EventTitleDisplay from '../components/EventTitleDisplay';
import IconButton from '../components/IconButton';

const EventListContainer = (props) => {

  const { navigation } = props;
  const title = navigation.getParam('title', '');
  const subtitle = navigation.getParam('subtitle', '');
  const eventDate = navigation.getParam('eventDatetime', '');

  return (
    <ScrollView>
      <View style={{flexDirection: 'row'}}>
        <SqaureDateDisplay width={100} datetimeStr={eventDate} />
        <EventTitleDisplay title={title} subtitle={subtitle} />
      </View>
      
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
        <IconButton text='aaa'/>
        <IconButton text='bbb'/>
        <IconButton text='ccc'/>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text style={{flex: 1, alignItems: 'center'}}>icon</Text>
        <View style={{ flexGrow: 1, justifyContent: 'center'}}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{title}</Text>
          <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode='tail'>{subtitle}</Text>
        </View>
      </View>
    </ScrollView>

  )
}

EventListContainer.navigationOptions = ({ navigation }) => {
  return ({
    headerTransparent: true,
    header: (props) => (
      <View style={{position: 'relative', height: 200}}>
        <Image 
          source={{ uri: navigation.getParam('imgUrl', 'sss') }} 
          style={[styles.headImage, StyleSheet.absoluteFill]}/>
        <Header {...props} />
      </View>
    ),
  });
}

const styles =  StyleSheet.create({
  headImage: {
    width: Dimensions.get('window').width,
    height: 200
  },
});

export default EventListContainer;