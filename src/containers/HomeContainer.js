import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MainListComponent from '../components/MainListComponent';

const HomeContainer = (props) => {
  
  const _onPressEventPageItem = (eventObj) => {
    props.navigation.navigate('EventPage', eventObj);
  }

  return (
    <View style={styles.container}>
      {/* <ScheduleButtonSet style={styles.scheduleButtonSet} navigation={props.navigation} />
      <ChannelHorizontal></ChannelHorizontal>
      <CarouselEvent onPress={_onPressEventPageItem}></CarouselEvent> */}

      <MainListComponent {...props} style={styles.mainList}/>
    </View>
  )
}

HomeContainer.navigationOptions = {
  title: 'Home'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  mainList: {
    flex: 1,
    width: '100%'
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