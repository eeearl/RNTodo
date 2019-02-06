import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import StoryCell from '../components/StoryCell';

class StoryContainer extends React.Component {
  
  _keyExtractor = (item, index) => index + "agg"

  _renderItem(item) {
    return <StoryCell id />
  }
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={["a", "b", "c"]} 
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
export default StoryContainer;