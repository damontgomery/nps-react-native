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

const AppNavigator = createStackNavigator(
  {
    ParkFinder: {screen: ParkFinderScreen},
    ParkBookmarks: {screen: ParkBookmarksScreen},
    ParkDetails: {screen: ParkDetailsScreen},
  },
  {
    initialRouteName: "ParkFinder"
  }
);

const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
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
