import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

// Components
import ParkFinder from './ParkFinder';

class ParkFinderScreen extends Component {

  static navigationOptions = {
    title: 'Park Finder',
  };

  handleParkClick (park) {
    this.props.navigation.navigate('ParkFinderDetails', {park: park});
  }

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
