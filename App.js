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
import StoryContainer from './src/containers/StoryContainer';
import SettingContainer from './src/containers/SettingContainer';

import { createAppContainer } from 'react-navigation';


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

const StoryStack = AppStackCreator({ 
    Story: StoryContainer
  }, {
    initialRouteName: "Story",
    defaultNavigationOptions: {
      headerTintColor: '#333'
    },
});

const SettingStack = AppStackCreator({
  Setting: SettingContainer
  }, {
    initialRouteName: "Setting",
    defaultNavigationOptions: {
      headerTintColor: '#333'
    }
});

const AppTab = AppTabCreator({
  Home: HomeStack,
  Story: StoryStack,
  Setting: SettingStack
});

const AppContainer = createAppContainer(AppTab)

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <AppContainer />
  }
}