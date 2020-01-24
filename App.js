//import liraries
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Router from './src/config/router';

class App extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Router />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
