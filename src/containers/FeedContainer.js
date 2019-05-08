// @flow

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Dimensions } from 'react-native';
import FeedCell from '../components/feed/FeedCell';

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

type Props = {
  title: string
}

const FeedContainer = () => {
  
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    setIsFetching(false);
  }, [isFetching])

  function _fetchData() {
    setIsFetching(true)
  }

  const _keyExtractor = (item, index) => index + "agg"
  
  function _renderSeparator() {
    return <View style={styles.separator}></View>
  }

  function _renderItem(item) {
    return <FeedCell 
              bodyVideoUrl={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`} 
              bodyVideoPoster="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/800px-Big_Buck_Bunny_thumbnail_vlc.png" />
  }
  
  return (
      <View style={styles.container}>
        <FlatList 
          style={styles.storyList}
          data={data}
          ItemSeparatorComponent={_renderSeparator}
          renderItem={_renderItem}
          keyExtractor={_keyExtractor} 
          refreshing={isFetching}
          onRefresh={() => _fetchData()} />
      </View>
    )
}

FeedContainer.navigationOptions = {
  title: 'Feed'
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

export default FeedContainer;