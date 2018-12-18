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

  // // Bookmark the park shown in the detail section.
  // handleBookmark () {
  //   let newBookmarks = this.state.bookmarks;

  //   // Add the current detailed park as a bookmarked park.
  //   newBookmarks.set(this.state.parkDetails.parkCode, this.state.parkDetails);

  //   this.setState({
  //     bookmarks: newBookmarks
  //   });
  // }

  render() {
    return (
      <View style={styles.app}>
        <ParkFinder
          onParkClick={(park) => this.handleParkClick(park)}
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
