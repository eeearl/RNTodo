import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ScheduleButtonSet from '../components/ScheduleButtonSet';
import CarouselEvent from '../components/CarouselEvent';
import ChannelHorizontal from '../components/ChannelHorizontal';

class HomeContainer extends React.Component {
  
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    return (
      <View style={styles.container}>
        <ScheduleButtonSet style={styles.scheduleButtonSet} />
        <ChannelHorizontal></ChannelHorizontal>
        <CarouselEvent></CarouselEvent>
      </View>
    )
  }
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
export default HomeContainer;