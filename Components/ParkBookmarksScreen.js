import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import ParkList from './ParkList';

class ParkBookmarksScreen extends Component {

  static navigationOptions = {
    title: 'Park Bookmarks',
  };

  handleParkClick (park) {
    this.props.navigation.navigate('ParkBookmarksDetails', {park: park});
  }

  render() {
    return (
      <View style={styles.app}>
        <ParkList
          parks={Array.from(this.props.navigation.getParam('bookmarks').values())}
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

export default ParkBookmarksScreen;
