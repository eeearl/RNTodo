import React, { useState } from 'react';
import { 
  Dimensions, StyleSheet, Platform, Animated, 
  Button, View, Text, InputAccessoryView, TouchableOpacity, 
  TextInput, Keyboard, KeyboardAvoidingView, ScrollView 
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const ExpandHeader = () => {
  return (
    <View
      style={[
        styles.header,
        {
          paddingHorizontal: screenWidth * 0.05,
          width: screenWidth,
          height: 120
        },
      ]}>
      <Text 
        style={{
          fontWeight: 'bold',
          fontSize: 26,
        }}>
        Todo
      </Text>
      <View
        style={{
          width: screenWidth * 0.7
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'whitesmoke',
    borderBottomWidth: 1,
    borderColor: 'gainsboro',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 8,
  }
});

export default ExpandHeader;