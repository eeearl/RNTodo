import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const SectionSeperateCell = (props: Props) => {
  return (
    <View style={styles.wrapper}>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: Dimensions.get('window').width,
    height: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#fff',
    backgroundColor: 'lightgrey'
  }
});

export default SectionSeperateCell;