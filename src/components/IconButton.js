import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const IconButton = ({ icon, text }) => {

  return (
    <View style={styles.wrapper}>
      <Image />
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  icon: {
    color: 'darkgray'
  },
  wrapper: {
    flexDirection: 'column',
    alignItems: 'center'
  }
});

export default IconButton;