import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
// import './ParkList.css';

import ParkCard from './ParkCard';

class ParkList extends Component {
  render() {
    let ParkCards = this.props.parks.map((park) => {
      return (
        <ParkCard key={park.parkCode}
          fullName = {park.fullName}
          name = {park.name}
          description = {park.description}
          designation = {park.designation}
          url = {park.url}
          directionsUrl = {park.directionsUrl}
          weatherInfo = {park.weatherInfo}
          images = {park.images}
          coordinates = {park.coordinates}
          onClick={() => this.props.onParkClick(park)}
        />
      );
    });

    return (
      <View style={styles.parkList}>
        {ParkCards}
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

/* Example usage:
<ParkList
  parks = parks // array of park objects
/>
*/

export default ParkList;
