import React from 'react';

import { Platform, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import AppStackCreator from '../navigator/AppStackCreator';
import NewPostContainer from '../containers/NewPostContainer';
import AppTabCreator from '../navigator/AppTabCreator';
import HomeContainer from '../containers/HomeContainer';
import EventPageContainer from '../containers/EventPageContainer';
import FeedContainer from '../containers/FeedContainer';
import SettingContainer from '../containers/SettingContainer';
import NoticeContainer from '../containers/NoticeContainer'
import AppSettingContainer from '../containers/AppSettingContainer'
import AboutContainer from '../containers/AboutContainer'

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
}, {
  initialRouteName: 'Home'
});

const AppNavigator = createStackNavigator({
    AppTab: AppTab,
    NewPost: NewPostContainer
  }, {
    initalRouteName: "AppTab",
    mode: 'modal',
    headerMode: 'none'
});

export default AppNavigator;