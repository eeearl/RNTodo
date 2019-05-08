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
import AppStackCreator from './src/navigator/AppStackCreator';
import AppTabCreator from './src/navigator/AppTabCreator';
import HomeContainer from './src/containers/HomeContainer';
import EventPageContainer from './src/containers/EventPageContainer';
import FeedContainer from './src/containers/FeedContainer';
import SettingContainer from './src/containers/SettingContainer';
import NoticeContainer from './src/containers/NoticeContainer'
import AppSettingContainer from './src/containers/AppSettingContainer'
import AboutContainer from './src/containers/AboutContainer'

import SignedOutStack from './src/navigator/SignedOutStack';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';


const HomeStack = AppStackCreator({ 
    Home: HomeContainer,
    EventPage: EventPageContainer
  }, 
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerTintColor: '#333'
    }
});

const FeedStack = AppStackCreator({ 
    Feed: FeedContainer
  }, {
    initialRouteName: "Feed",
    defaultNavigationOptions: {
      headerTintColor: '#333'
    },
});

const SettingStack = AppStackCreator({
  Setting: SettingContainer,
  Notice: NoticeContainer,
  AppSetting: AppSettingContainer,
  About: AboutContainer
  }, {
    initialRouteName: "Setting",
    defaultNavigationOptions: {
      headerTintColor: '#333'
    }
});

const AppTab = AppTabCreator({
  Feed: FeedStack,
  Home: HomeStack,
  Setting: SettingStack
});

// const AppContainer = createAppContainer(AppTab);

const App = () => {
  const SwitchAppContainer = createSwitchNavigator({
    SignedIn: AppTab,
    SignedOut: SignedOutStack
  }, {
    initialRouteName: 'SignedOut'
  });

  const AppContainer = createAppContainer(SwitchAppContainer)

  return <AppContainer />
}

export default App;