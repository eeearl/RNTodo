import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ChannelCell from './ChannelCell';

const ChannelHorizontal = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.scrollWrapper} horizontal={true} showsHorizontalScrollIndicator={false}>
        <ChannelCell />
        <ChannelCell />
        <ChannelCell />
        <ChannelCell />
        <ChannelCell />
        <ChannelCell />
        <ChannelCell />
        <ChannelCell />
        <ChannelCell />
        <ChannelCell />
        <ChannelCell />
        <ChannelCell />
        <ChannelCell />
        <ChannelCell />
        <ChannelCell />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'stretch'
  },
  scrollWrapper: {

    alignSelf: 'stretch',
  }
});

export default ChannelHorizontal;