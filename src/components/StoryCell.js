import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const StoryCell = () => {
  return (
    <View>
      <View>
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
        <Text>a</Text>
      </View>
      <Text>asdfasfsfsdfsf
      asdfasfsfsdfsfasdf
      
      asdfasfsfsdfsfasdf</Text>
      
    </View>
  )
};



export default StoryCell;