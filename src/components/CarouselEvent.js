// @flow 

import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, Dimensions, Platform } from 'react-native';
import type {
  ViewStyleProp,
  TextStyleProp,
  ImageStyleProp,
} from 'react-native/Libraries/StyleSheet/StyleSheet';
import Carousel from 'react-native-snap-carousel';

const IS_IOS = Platform.OS === 'ios';

const ENTRIES2 = [
    {
        title: 'Favourites landscapes 1',
        subtitle: 'Lorem ipsum dolor sit amet',
        imgUrl: 'https://i.imgur.com/SsJmZ9jl.jpg',
        eventDatetime: '2019-02-07T15:53:00'
    },
    {
        title: 'Favourites landscapes 2',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur sdfksjdfkjsfksjdfnkjefjbffq qofiqwfoijqwfoijq ',
        imgUrl: 'https://i.imgur.com/5tj6S7Ol.jpg',
        eventDatetime: '2019-02-07T15:53:00'
    },
    {
        title: 'Favourites landscapes 3',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat',
        imgUrl: 'https://i.imgur.com/pmSqIFZl.jpg',   
        eventDatetime: '2019-02-07T15:53:00'
    },
    {
        title: 'Favourites landscapes 4',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        imgUrl: 'https://i.imgur.com/cA8zoGel.jpg',   
        eventDatetime: '2019-02-07T15:53:00'
    },
    {
        title: 'Favourites landscapes 5',
        subtitle: 'Lorem ipsum dolor sit amet',
        imgUrl: 'https://i.imgur.com/pewusMzl.jpg',
        eventDatetime: '2019-02-07T15:53:00'
    },
    {
        title: 'Favourites landscapes 6',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat',
        imgUrl: 'https://i.imgur.com/l49aYS3l.jpg',
        eventDatetime: '2019-02-07T15:53:00'
    }
];

const wp = (percentage) => {
  const viewportWidth = Dimensions.get('window').width;
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const sliderWidth = Dimensions.get('window').width;
const itemWidth = wp(75) + (wp(2) * 2);
const itemHeight = Dimensions.get('window').height * 0.36;

type Props = {
    style?: ViewStyleProp;
};

const Entry = ({image, title, subtitle, onPress}) => {
  const uppercaseTitle = title.toUpperCase();

  return (
    <TouchableOpacity style={styles.entryContainer} onPress={onPress}>
      <View style={styles.shadow} />
      <View style={[styles.imageContainer]}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={[styles.textContainer]}>
        <Text>{uppercaseTitle}</Text>
        <Text style={[styles.subtitle]} numberOfLines={2} ellipsizeMode='tail'>
          {subtitle}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const CarouselEvent = (props) => {

  function _renderItem({item, index}) {
    return (
      <Entry 
        image={item.imgUrl} 
        title={item.title} 
        subtitle={item.subtitle} 
        onPress={ () => props.onPress(item) } />
    ) 
  }

  return(
    <View style={styles.carouselWrapper}>
      <Text style={styles.title}>{`Event`}</Text>
      <Carousel
        data={ENTRIES2}
        renderItem={_renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        enableMomentum={true}
        activeSlideAlignment={'start'}
        containerCustomStyle={styles.slider}
        contentContainerCustomStyle={styles.sliderContentContainer}
        activeAnimationType={'spring'}
        activeAnimationOptions={{
            friction: 4,
            tension: 40
        }}
      />
    </View> 
  )
}

const styles = StyleSheet.create({
  carouselWrapper: {
// position: 'absolute',
//         top: 0,
//         left: wp(2),
//         right: wp(2),
//         bottom: 18,
//         shadowColor: 'black',
//         shadowOpacity: 0.25,
//         shadowOffset: { width: 0, height: 10 },
//         shadowRadius: 10,
//         borderRadius: 8
  },
  title: {
    alignSelf: 'stretch',
    paddingHorizontal: 8,
    paddingVertical: 10,
    fontWeight: 'bold'
  },
  subtitle: {
    minHeight: 100,
    maxHeight: 100
  },
  entryContainer: {
    width: itemWidth,
    height: itemHeight,
    paddingHorizontal: wp(2),
    paddingBottom: 18 // needed for shadow
  },
  imageContainer: {
    flex: 1,
    marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: 0,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
});

export default CarouselEvent;