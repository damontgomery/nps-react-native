import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

// Screens
import ParkFinderScreen from './Components/ParkFinderScreen';
import ParkBookmarksScreen from './Components/ParkBookmarksScreen';
import ParkDetailsScreen from './Components/ParkDetailsScreen';

// Navigation
import { createStackNavigator, createAppContainer } from 'react-navigation';

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

    this.state = {
      bookmarks: new Map()
    };
  }

  // Bookmark the park shown in the detail section.
  handleBookmark (park) {
    let newBookmarks = this.state.bookmarks;

    // Add the current detailed park as a bookmarked park.
    newBookmarks.set(park.parkCode, park);

    this.setState({
      bookmarks: newBookmarks
    });
  }

  render() {
    const AppNavigator = createStackNavigator(
      {
        ParkFinder: {
          screen: ParkFinderScreen
        },
        ParkBookmarks: {
          screen: ParkBookmarksScreen,
          params: {
            bookmarks: this.state.bookmarks
          }
        },
        ParkDetails: {
          screen: ParkDetailsScreen,
          params: {
            handleBookmark: (park) => this.handleBookmark(park),
          }
        },
      },
      {
        initialRouteName: "ParkFinder"
      }
    );
    
    const AppContainer = createAppContainer(AppNavigator);

    return (
      <ApolloProvider client={client}>
        <AppContainer/>
      </ApolloProvider>
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

export default App;
