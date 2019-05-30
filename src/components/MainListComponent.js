import React, { useState, useEffect, useRef } from 'react';
import { 
  Dimensions, StyleSheet, Platform, Animated, 
  Button, View, Text, InputAccessoryView, TouchableOpacity, 
  TextInput, Keyboard, FlatList
} from 'react-native';

import AppStackCreator from '../navigator/AppStackCreator';
import ExpandedHeader from './ExpandedHeader';

const screenWidth = Dimensions.get('window').width;

const MainListComponent = (props) => {

  let newTodoText = '';
  const [showKeyboard, setShowKeyboard] = useState(true);

  const [rows, setRows] = useState([
    {id: '0', text: 'View', headingChar: '😀', done: false},
    {id: '1', text: 'Text', headingChar: '😍', done: false},
    {id: '2', text: 'ImageImageImageImageImageImageImageImageImageImageImageImageImageImageImageImageImageImageImageImage', headingChar: '😀', done: false},
    {id: '3', text: 'ScrollView', headingChar: '😀', done: false},
    {id: '4', text: 'ListView', headingChar: '😀', done: true},
  ]);

  const inputRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {    
    const keyboardShowEvent = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
    const keyboardHideEvent = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

  }, []);

  function renderItem({item}) {

    const additionalStyle = item.id % 2 === 0 ? styles.dividerBackground : {} ;
    const doneStyle = item.done ? styles.doneStyle : {};

    return (
      <TouchableOpacity onPress={(e) => {
          item.done = !item.done;
          setRows([...rows]);
        }}>
        <View style={[styles.itemContainer, additionalStyle]}>
          <Text style={[styles.headingChar]}>{item.done ? '🙆‍' : item.headingChar}</Text>
          <Text
            style={[styles.itemTitle, doneStyle]}
            ellipsizeMode ={'tail'}
            numberOfLines={2}>
            {item.text}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <ExpandedHeader/>
      <FlatList 
        style={styles.container}
        data={rows}
        renderItem={renderItem}
        keyExtractor={({id}) => id}
        ref={listRef}
        onContentSizeChange={() => listRef.current.scrollToEnd({animated: true})}
        onLayout={() => listRef.current.scrollToEnd({animated: true})}
        ListFooterComponent={() => { 
        return (
          <View>  
            <TextInput
              underlineColorAndroid="transparent"
              style={[styles.textInput, styles.footerInput]}
              placeholder={'Type your task...'}
              multiline={false}
              returnKeyType='done'
              returnKeyLabel='Add'
              selectionColor={'#adadad'}
              onChangeText={(v) => newTodoText = v }
              onSubmitEditing={(e) => {
                const newRows = [...rows, { id: rows.length, text: newTodoText,  headingChar: '😀', done: false }];
                setRows(newRows);
              }} />
          </View>);
        }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    backgroundColor: '#efefef'
  },
  header: {
    backgroundColor: 'whitesmoke',
    borderBottomWidth: 1,
    borderColor: 'gainsboro',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 8,
  },
  textInputView: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  headingChar: {
    padding: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  itemTitle: {
    paddingLeft: 15,
    fontSize: 12,
    width: Dimensions.get('window').width - 50,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#CCC',
    padding: 10,
    fontSize: 16,
    marginRight: 10,
  },
  textInputButton: {
    flexShrink: 1,
  },
  dividerBackground: {
    backgroundColor: '#00000004'
  },
  doneStyle: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: '#999'
  },
  footerContainer: {
  },
  footerInput: {
    fontStyle: 'italic',
    borderColor: '#eaeaea',
    borderWidth: 2,
    borderRadius: 4,
    marginLeft: 10,
    marginRight: 10,

    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    
    shadowRadius: 4,
    backgroundColor: '#fafafa'
  }
});

export default MainListComponent;