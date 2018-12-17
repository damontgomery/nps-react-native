import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import './ParkFinder.css';
import ParkList from './ParkList';
import StateFilter from './StateFilter';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class ParkFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateFilter: "UT"
    };
  }

  handleStateFilterChange (state) {
    this.setState({
      stateFilter: state
    });
  }

  handleParkClick (park) {
    this.props.onParkClick(park);
  }

  render() {
    const parksQuery = gql`
      query parksQuery($stateFilter: State!){
        parks(stateCode: $stateFilter) {
          parkCode
          fullName
          name
          description
          designation
          url
          directionsUrl
          weatherInfo
          images {
            url
            altText
          }
          coordinates {
            lat
            long
          }
        }
       }
    `;

    // Create a higher order component by combining GraphQL with the React component.
    const ParkListWithData = graphql(
      parksQuery,
      {
        options: {
          variables: {
            // parkCodeFilter: "arch",
            stateFilter: this.state.stateFilter
          }
        },
      }
    )(({ data: {loading, error, parks }}) => {
      if (loading) {
        return <Text>Loading ...</Text>;
      }
      if (error) {
        return <Text>{error.message}</Text>;
      }
      return (
        <ParkList
          parks={parks}
          onParkClick={(park) => this.handleParkClick(park)}
        />
      );
     });

    return (
      <View style={styles.parkFinder}>
        <StateFilter
          state={this.state.stateFilter}
          onChange={(state) => this.handleStateFilterChange(state)}
          style={styles.parkFinderStateFilter}
        />
        <ParkListWithData
          style={styles.parkFinderParkList}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

/* Example usage:
<ParkFinder
/>
*/

export default ParkFinder;
