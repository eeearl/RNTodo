import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import RoundedImage from '../RoundedImage';

type Props = {
  title: string,
  tailText: ?string,
  onPress: ?object
}

const GeneralCell = (props: Props) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={props.onPress}>
      <View style={styles.textWrap}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.tailText}>{props.tailText}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: Dimensions.get('window').width,
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'column'
  },
  icWrap: {
  },
  textWrap: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingLeft: 10,
    justifyContent: 'space-between'
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
  },
  tailText: {
    fontSize: 14,
    paddingHorizontal: 10,
    alignItems: 'stretch'
  }
});

export default GeneralCell;