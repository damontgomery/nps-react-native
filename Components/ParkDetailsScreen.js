import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Components
import ParkDetails from './ParkDetails';

class ParkDetailsScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('park').fullName,
    }
  };

  constructor(props) {
    super(props);

    let parkMock = {
      parkCode: null,
      fullName: null,
      name: null,
      description: null,
      designation: null,
      url: null,
      directionsUrl: null,
      weatherInfo: null,
      images: null,
      coordinates: null
    }

    this.state = {
      parkDetails: this.props.navigation.getParam('park', parkMock),
    };
  }

  render() {
    const park = this.state.parkDetails;

    return (
      <View style={styles.app}>
        <ParkDetails
          name = {park.name}
          description = {park.description}
          designation = {park.designation}
          url = {park.url}
          directionsUrl = {park.directionsUrl}
          weatherInfo = {park.weatherInfo}
          images = {park.images}
          coordinates = {park.coordinates}
          // onBookmark = {() => this.handleBookmark()}
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

export default ParkDetailsScreen;
