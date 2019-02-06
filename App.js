/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import AppStackCreator from './src/navigator/AppStackCreator';
import AppTabCreator from './src/navigator/AppTabCreator';
import IntroContainer from './src/containers/IntroContainer';
import SnsContainer from './src/containers/SnsContainer';
import SettingContainer from './src/containers/SettingContainer';

import { createAppContainer } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const IntroStack = AppStackCreator({ 
    Intro: IntroContainer
  }, {
    initialRouteName: "Intro"
});

const AppTab = AppTabCreator({
  Intro: IntroStack,
  Sns: SnsContainer,
  Setting: SettingContainer
});

const AppContainer = createAppContainer(AppTab)

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <AppContainer />
  }
}