import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import RoundedImage from '../RoundedImage';
import { fakeProfile } from '../../images/_assets/';

const UserCell = () => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <RoundedImage type='large' style={styles.picWrap} src={fakeProfile} />
      <View style={styles.textWrap}>
        <Text style={styles.name}>みなと</Text>
        <Text styles={styles.following}>Following 10</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: Dimensions.get('window').width,
    padding: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row'
  },
  picWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  textWrap: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingLeft: 16,
    top: -10
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24
  },
  following: {
    fontSize: 20
  }
});

export default UserCell;