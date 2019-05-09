import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Platform, Animated, Button, View, Text, InputAccessoryView, TouchableOpacity, TextInput, Keyboard, KeyboardAvoidingView, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';

import AppStackCreator from '../navigator/AppStackCreator';
import KeyboardAccessoryView from '../libs/KeyboardAccessoryView';

const NewPostContainer = (props) => {
  const [inputText, setInputText] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(true);
  // const paddingInput = new Animated.Value(0);

  const inputRef = useRef(null);
  const inputAccessoryViewID = "uniqueID";

  useEffect(() => {
    inputRef.current.focus();
    
    const keyboardShowEvent = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
    const keyboardHideEvent = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

    const keyboardWillShowSub = Keyboard.addListener(keyboardShowEvent, keyboardWillShow);
    const keyboardWillHideSub = Keyboard.addListener(keyboardHideEvent, keyboardWillHide);
    
    return () => {
      keyboardWillShowSub.remove();
      keyboardWillHideSub.remove();
    }
  }, [])

  function keyboardWillShow(event) {
    // Animated.timing(paddingInput, {
    //     duration: event.duration,
    //     toValue: 60,
    // }).start();
  }

  function keyboardWillHide(event) {
    // const duration = 100
    // Animated.timing(paddingInput, {
    //     duration: duration,
    //     toValue: 0,
    // }).start();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <TextInput 
          ref={inputRef}
          multiline={true}
          numberOfLines={8}
          onChangeText={(text) => setInputText(text) }
          value={inputText}
          textAlignVertical={'top'}
          style={{backgroundColor: 'green'}}
        />
      </ScrollView>

      <KeyboardAccessoryView alwaysVisible={true} androidAdjustResize>
          <View style={[styles.textInputView]}>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.textInput}
              multiline={true} />
            <Button
              style={styles.textInputButton}
              title="Send"
              onPress={() => {}}/>
          </View>
        </KeyboardAccessoryView>
    </View>
  )
}

NewPostContainer.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => { navigation.dispatch(NavigationActions.back({})) }}>
        <Text>close</Text> 
      </TouchableOpacity> 
    ),
    headerLeft: (
      <TouchableOpacity onPress={() => { Keyboard.dismiss() }}>
        <Text>hide</Text> 
      </TouchableOpacity> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textInputView: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    flexGrow: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#CCC',
    padding: 10,
    fontSize: 16,
    marginRight: 10,
    textAlignVertical: 'top'
  },
  textInputButton: {
    flexShrink: 1,
  }
});

export default AppStackCreator({ 
  NewPostContainer: NewPostContainer
}, {
  initialRouteName: "NewPostContainer",
  defaultNavigationOptions: {
    headerTintColor: '#333'
  }
});