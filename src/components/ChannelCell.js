import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ChannelCell = () => {
  return (
    <View style={styles.cellWrapper}>
      <TouchableOpacity
        style={{
          borderWidth:1,
          borderColor:'rgba(0,0,0,0.2)',
          alignItems:'center',
          justifyContent:'center',
          width:50,
          height:50,
          backgroundColor:'#333',
          borderRadius:100,
          marginBottom: 10 
        }}>
        </TouchableOpacity>
      <Text>ChannelName</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cellWrapper: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ChannelCell;