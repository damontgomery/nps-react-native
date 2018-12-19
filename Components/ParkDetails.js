import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

class ParkDetails extends Component {

  render() {
    let content = (
      <View style={styles.content}>
        <Text>Click on a park to see detailed information.</Text>
      </View>
    );

    if (this.props.name !== null) {

      let image = null;
      // The original images are massive, ~5 mb to 10mb each. These parameters on the images will serve cropped images.
      let cropUrlParameters = "?width=800&height=450&mode=crop&quality=90";

      if (this.props.images.length > 0){
        let imageUrl = this.props.images[0].url + cropUrlParameters;

        image = (
          <Image style={styles.image} source={{uri: imageUrl}}/>
        );
      }

      let bookmarkButton = null;

      if (typeof this.props.onBookmark !== 'undefined'){
        bookmarkButton = (
          <Button 
            title="Bookmark"
            onPress={() => this.props.onBookmark()}
          />
        );
      }

      content = (
        <View style={styles.content}>
          {image}
          <View style={styles.name}>
            <Text>{this.props.name}</Text>
          </View>
          <View style={styles.description}>
            <Text>{this.props.description}</Text>
          </View>
          {/* <a href={this.props.url} style={styles.moreInformation}>More information</a>
          <a href={this.props.directionsUrl} style={styles.directions}>Directions</a>*/}
          {bookmarkButton}
        </View>
      );
    }
    
    return (
      <View style={styles.parkDetails}>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 300,
  }
});

/* Example usage:
<ParkDetails
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

export default ParkDetails;
