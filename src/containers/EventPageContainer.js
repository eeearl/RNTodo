import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { Header } from 'react-navigation';
import SqaureDateDisplay from '../components/SqaureDateDisplay';

class EventPageContainer extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return ({
      // title: navigation.getParam('title', 'Event'),
      headerTransparent: true,
      header: (props) => (
        <View style={{position: 'relative', height: 200}}>
          <Image 
            source={{ uri: navigation.getParam('imgUrl', 'sss') }} 
            style={[styles.headImage, StyleSheet.absoluteFill]}/>
          <Header {...props} />
        </View>
      ),
    });
  }

  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('title', '');
    const subtitle = navigation.getParam('subtitle', '');
    const eventDate = navigation.getParam('eventDatetime', '');

    return (
      <ScrollView>
      
        <View style={{flexDirection: 'row'}}>
          <SqaureDateDisplay width={100} datetimeStr={eventDate} />
          <View style={{ flexGrow: 1, justifyContent: 'center'}}>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{title}</Text>
            <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode='tail'>{subtitle}</Text>
          </View>
        </View>
        
        
        
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1, alignItems: 'center'}}>icon</Text>
          <View style={{ flexGrow: 1, justifyContent: 'center'}}>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{title}</Text>
            <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode='tail'>{subtitle}</Text>
          </View>
        </View>

        <View>
          
        </View>

      </ScrollView>
    )
  }
}

const styles =  StyleSheet.create({
  headImage: {
    width: Dimensions.get('window').width,
    height: 200
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  subtitle: {
    color: 'darkgray'
  }
});

export default EventPageContainer;