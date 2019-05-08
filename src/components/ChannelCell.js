import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import RoundedImage from './RoundedImage'

const ChannelCell = () => {
  return (
    <TouchableOpacity style={styles.cellWrapper}>
      <RoundedImage />
      <Text>ChannelName</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cellWrapper: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ChannelCell;