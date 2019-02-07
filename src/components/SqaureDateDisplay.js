import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';

const SqaureDateDisplay = ({style = {}, width, datetimeStr}) => {
  
  const dt = moment(datetimeStr);
  const month = dt.format('MMM');
  const day = dt.format('DD');

  return (
    <View style={[{ width: width, height: width }, styles.wrapper, ...style]}>
      <Text style={styles.month}>{month}</Text>
      <Text style={styles.day}>{day}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  month: {
    fontSize: 18
  },
  day: {
    fontSize: 20
  }
});

export default SqaureDateDisplay;