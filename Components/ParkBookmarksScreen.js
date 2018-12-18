import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

// Components
// import ParkFinder from './ParkFinder';

class ParkBookmarksScreen extends Component {

  static navigationOptions = {
    title: 'Park Bookmarks',
  };

  handleParkClick (park) {
    this.props.navigation.navigate('ParkDetails', {park: park});
  }

  render() {
    return (
      <View style={styles.app}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

export default ParkBookmarksScreen;
