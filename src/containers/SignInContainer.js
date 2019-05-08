import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import UserCell from '../components/setting/UserCell';
import GeneralCell from '../components/setting/GeneralCell';
import SectionSeperateCell from '../components/setting/SectionSeperateCell';

const SignInContainer = (props) => {
  return (
    <View>
      <Text>SignIn</Text>
    </View>
  )
}

SignInContainer.navigationOptions = {
  title: 'Setting'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default SignInContainer;