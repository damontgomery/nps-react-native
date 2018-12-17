import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
// import './ParkCard.css';

class ParkCard extends Component {
  render() {
    return (
      <View style={styles.parkCard}>
        <Button
          style={styles.name}
          onPress={() => this.props.onClick()}
          title={this.props.fullName}
        ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

/* Example usage:
<ParkCard
  name = "Example park name"
  description = "Example park description"
  designation = "Example park designation"
  url = "Example park url"
  directionsUrl = "Example park directionsUrl"
  weatherInfo = "Example park weatherInfo"
  images = "Example park images"
  coordinates = "Example park coordinates"
/>
*/

export default ParkCard;
