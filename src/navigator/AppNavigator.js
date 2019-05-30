import React from 'react';

import { Platform, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import AppStackCreator from '../navigator/AppStackCreator';
import HomeContainer from '../containers/HomeContainer';
import EventPageContainer from '../containers/EventPageContainer';

const App = AppStackCreator({ 
  Home: HomeContainer,
  EventPage: EventPageContainer
}, 
{
  initialRouteName: "Home",
  defaultNavigationOptions: {
    headerTintColor: '#333'
  },
  headerMode: 'none',
});

export default App;