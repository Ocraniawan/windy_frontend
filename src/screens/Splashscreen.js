import React, {Component} from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  root: {backgroundColor: '#fff', flex: 1},
  img: {width: '100%', height: '100%'},
});

export default class Splashscreen extends Component {
  static navigationOptions = {
    headerShown: null,
  };
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Cari');
    }, 2000);
  }
  render() {
    return (
      <View style={StyleSheet.root}>
        <ImageBackground
          source={require('../assets/splash.jpeg')}
          style={styles.img}
        />
      </View>
    );
  }
}
