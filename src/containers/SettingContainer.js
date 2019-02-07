import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class SettingContainer extends React.Component {
  static navigationOptions = {
    title: 'Setting'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Setting</Text>
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

export default SettingContainer;