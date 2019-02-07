import React from 'react';
import { StyleSheet, View, Text, FlatList, Dimensions } from 'react-native';
import StoryCell from '../components/StoryCell';

const data = [
    {
        title: 'Favourites landscapes 1',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/SsJmZ9jl.jpg'
    },
    {
        title: 'Favourites landscapes 2',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur sdfksjdfkjsfksjdfnkjefjbffq qofiqwfoijqwfoijq ',
        illustration: 'https://i.imgur.com/5tj6S7Ol.jpg'
    },
    {
        title: 'Favourites landscapes 3',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat',
        illustration: 'https://i.imgur.com/pmSqIFZl.jpg'
    },
    {
        title: 'Favourites landscapes 4',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/cA8zoGel.jpg'
    },
    {
        title: 'Favourites landscapes 5',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/pewusMzl.jpg'
    },
    {
        title: 'Favourites landscapes 6',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat',
        illustration: 'https://i.imgur.com/l49aYS3l.jpg'
    }
];

class StoryContainer extends React.Component {
  
  static navigationOptions = {
    title: 'Story'
  }

  _keyExtractor = (item, index) => index + "agg"
  
  _renderSeparator() {
    return <View style={styles.separator}></View>
  }

  _renderItem(item) {
    return <StoryCell />
  }
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          style={styles.storyList}
          data={data} 
          ItemSeparatorComponent={this._renderSeparator}
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
  storyList: {
    flex: 1,
    alignSelf: 'stretch'
  },
  separator: {
    width: Dimensions.get('window').width,
    height: 10,
    backgroundColor: '#ddd',
    paddingBottom: 5,
  },
});

export default StoryContainer;