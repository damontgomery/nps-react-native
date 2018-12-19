import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ParkList from './ParkList';

class ParkBookmarksScreen extends Component {

  static navigationOptions = {
    title: 'Park Bookmarks',
  };

  handleParkClick (park) {
    this.props.navigation.navigate('ParkBookmarksDetails', {park: park});
  }

  render() {
    let content;

    let bookmarks = Array.from(this.props.navigation.getParam('bookmarks').values());

    if (bookmarks.length > 0) {
      content = (
        <ParkList
          parks={bookmarks}
          onParkClick={(park) => this.handleParkClick(park)}
        />
      );
    }
    else {
      content = (
        <Text>Please find some parks to view and bookmark.</Text>
      );
    }

    return (
      <View style={styles.app}>
        {content}
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
