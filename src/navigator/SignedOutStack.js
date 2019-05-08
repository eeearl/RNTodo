import React from 'react';

import { Platform, StatusBar } from 'react-native';
import AppStackCreator from '../navigator/AppStackCreator';
import SignUpContainer from '../containers/SignUpContainer';
import SignInContainer from '../containers/SignInContainer';

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
}

const SignedOutStack = AppStackCreator({
  SignUp: SignUpContainer,
  SignIn: SignInContainer
  }, {
    initalRouteName: "SignUp"
});

export default SignedOutStack;