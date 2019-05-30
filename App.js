/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';

import AppNavigator from './src/navigator/AppNavigator';

export default createAppContainer(AppNavigator);