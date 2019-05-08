import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { todayButtonBg, tmrwBtnBg, thisweek } from '../images/_assets/';

class ScheduleButtonSet extends React.Component {
  
  state = { width: 0 }

  render() {
    const itemWidth = this.state.width / 3 - 10;
    const buttonBoxStyle = { width: itemWidth, height: itemWidth };

    return (
      <View style={styles.wrapper} onLayout={event => {
        this.setState({ width: event.nativeEvent.layout.width });
      }}>
        <TouchableOpacity style={[styles.today, buttonBoxStyle]}>
          <Image style={{ position: 'absolute', top: 0, right:0, left: 0, bottom: 0 } } source={{ uri:todayButtonBg }} />
          <View style={{ backgroundColor: '#00000088', position: 'absolute', top: 0, right: 0, left: 0, bottom: 0 }} />
          <Text style={styles.text}>Today</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tomorrow, buttonBoxStyle]}>
          <Image style={{ position: 'absolute', top: 0, right:0, left: 0, bottom: 0 } } source={{ uri:tmrwBtnBg }} />
          <View style={{ backgroundColor: '#00000088', position: 'absolute', top: 0, right: 0, left: 0, bottom: 0 }} />
          <Text style={styles.text}>Tomorrow</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={[styles.thisweek, buttonBoxStyle]}>
          <Image style={{ position: 'absolute', top: 0, right:0, left: 0, bottom: 0 } } source={{ uri:thisweek }} />
          <View style={{ backgroundColor: '#00000088', position: 'absolute', top: 0, right: 0, left: 0, bottom: 0 }} />
          <Text style={styles.text}>This Week</Text> 
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width,
    paddingTop: 14,
    paddingBottom: 14,
    paddingRight: 7,
    paddingLeft: 7
  },
  today: {
    backgroundColor: 'powderblue'
  },
  tomorrow: {
    backgroundColor: 'skyblue'
  },
  thisweek: {
    backgroundColor: 'steelblue'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 10,
    left: 10
  }
})

export default ScheduleButtonSet;