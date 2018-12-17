import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, Slider, Switch } from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      text: 'No value yet!',
      switch: false
    };
  }

  handleTextInput(text) {
    this.setState({text: text});
  }

  handleSwitch() {
    let switchState = this.state.switch;

    this.setState({switch: !switchState});
  }

  handleFunButton() {
    Alert.alert('You tapped the button!');
  }

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.blueBox}>
          <TextInput 
            style={styles.textInput}
            placeholder='Tell me a word!'
            onChangeText={(text) => this.handleTextInput(text)}
          />
          <Button
            title='A fun button'
            onPress={() => this.handleFunButton()}
          />
          <Slider
            minimumValue={0}
            maximumValue={10}
            width={300}
          />
          <Switch
            onValueChange={() => this.handleSwitch()}
            value={this.state.switch}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.header}>A Fun Typing App</Text>
          <Text>Type some text above.</Text>
          <Text>And see it below!</Text>
        </View>
        <View style={styles.results}>
          <Text style={styles.resultsText}>{this.state.text}</Text>
          <ScrollView>
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  header: {
    color: '#E09090',
    fontSize: 24,
  },
  blueBox: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textInput: {
    // height: 40,
    color: '#000',
    backgroundColor: '#FFF',
    padding: 10,
    fontSize: 24,
  },
  results: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#609060',
  },
  resultsText: {
    color: '#FFFFFF',
    fontSize: 24,
  }
});

export default App;
