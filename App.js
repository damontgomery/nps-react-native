import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Components
import ParkFinder from './Components/ParkFinder';
import ParkDetails from './Components/ParkDetails';
// import ParkList from './Components/ParkList';

// GraphQL Client
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// Allow environment variables to set the GraphQL server URI.
const npsGraphQLURI = 'https://nps-graphql.herokuapp.com/graphql';

const client = new ApolloClient({
  link: new HttpLink({ uri: npsGraphQLURI }),
  cache: new InMemoryCache()
});

class App extends Component {

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
      parkDetails: parkMock,
      bookmarks: new Map()
    };
  }

  handleParkClick (park) {
    this.setState({
      parkDetails: park
    });
  }

  // Bookmark the park shown in the detail section.
  handleBookmark () {
    let newBookmarks = this.state.bookmarks;

    // Add the current detailed park as a bookmarked park.
    newBookmarks.set(this.state.parkDetails.parkCode, this.state.parkDetails);

    this.setState({
      bookmarks: newBookmarks
    });
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.app}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>National Park Bookmarks</Text>
          </View>
          <View styles={styles.parkDetailsTitle}>
            <Text>Park Details</Text>
          </View>
          <ParkDetails
            name = {this.state.parkDetails.name}
            description = {this.state.parkDetails.description}
            designation = {this.state.parkDetails.designation}
            url = {this.state.parkDetails.url}
            directionsUrl = {this.state.parkDetails.directionsUrl}
            weatherInfo = {this.state.parkDetails.weatherInfo}
            images = {this.state.parkDetails.images}
            coordinates = {this.state.parkDetails.coordinates}
            onBookmark = {() => this.handleBookmark()}
          />
          <View style={styles.parkFinderTitle}>
            <Text>Park Finder</Text>
          </View>
          <ParkFinder
            onParkClick={(park) => this.handleParkClick(park)}
          />
        </View>

        {/* <div className="app">
          <div className="bookmark-list--title">Bookmarks</div>
          <div className="bookmark-list">
            <ParkList
              parks={Array.from(this.state.bookmarks.values())}
              onParkClick={(park) => this.handleParkClick(park)}
            />
          </div>
        </div> */}
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
