import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import UserCell from '../components/setting/UserCell';
import GeneralCell from '../components/setting/GeneralCell';
import SectionSeperateCell from '../components/setting/SectionSeperateCell';

const SettingContainer = (props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <UserCell></UserCell>
        <GeneralCell title='EDIT PROFILE'/>
        <GeneralCell title='MY POSTS' tailText='10'/>
        <GeneralCell title='LINK ACCOUNT' tailText='Facebook'/>
        <SectionSeperateCell />
        <GeneralCell title='APP SETTING' onPress={(e) => props.navigation.navigate('AppSetting', e) }/>
        <GeneralCell title='NOTICE' onPress={(e) => props.navigation.navigate('Notice') }/>
        <GeneralCell title='ABOUT' onPress={(e) => props.navigation.navigate('About') }/>
      </View>
    </ScrollView>
  )
}

SettingContainer.navigationOptions = {
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

export default SettingContainer;