import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ScheduleButtonSet from '../components/ScheduleButtonSet';
import CarouselEvent from '../components/CarouselEvent';

const IntroContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Intro</Text>
      <ScheduleButtonSet style={styles.scheduleButtonSet} />
      <CarouselEvent></CarouselEvent>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  scheduleButtonSet: {
    flex: 1
  },
});
export default IntroContainer;