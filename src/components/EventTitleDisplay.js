import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EventTitleDisplay = ({ title, subtitle }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{title}</Text>
      <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode='tail'>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  subtitle: {
    color: 'darkgray'
  }
});

export default EventTitleDisplay;