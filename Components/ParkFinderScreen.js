import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

// Components
import ParkFinder from './ParkFinder';

class ParkFinderScreen extends Component {

  static navigationOptions = {
    title: 'Park Finder',
  };

  handleParkClick (park) {
    this.props.navigation.navigate('ParkDetails', {park: park});
  }

  render() {
    return (
      <View style={styles.app}>
        <ParkFinder
          onParkClick={(park) => this.handleParkClick(park)}
        />
        <Button
          onPress={() => this.props.navigation.navigate('ParkBookmarks')}
          title="Bookmarks"
          accessibilityLabel="View bookmarks"
        />
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

export default ParkFinderScreen;
