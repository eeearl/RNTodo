/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { Platform, Animated, Easing, } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignedOutStack from './src/navigator/SignedOutStack';
import AppNavigator from './src/navigator/AppNavigator';

const App = () => {
  const SwitchAppContainer = createSwitchNavigator({
    SignedIn: AppNavigator,
    SignedOut: SignedOutStack
  }, {
    initialRouteName: 'SignedIn'
  });

  const AppContainer = createAppContainer(SwitchAppContainer)

  return <AppContainer />
}

export default App;