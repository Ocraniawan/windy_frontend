import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {withNavigation} from 'react-navigation';

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: '#fff'},
  textheader: {
    fontFamily: 'MuseoSansRounded500',
    color: '#fff',
    fontSize: 16,
    paddingLeft: 16,
  },
  header: {
    flexDirection: 'row',
    height: 55,
    paddingLeft: 15,
    alignItems: 'center',
  },
  wraparrowico: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    borderRadius: 50,
    marginRight: 2,
  },
  arrowico: {height: 22, width: 22, borderRadius: 50},
  textbutton: {
    fontFamily: 'MuseoSansRounded700',
    color: '#000',
    fontSize: 16,
    marginTop: 3,
  },
  wraplist: {flexDirection: 'row', marginTop: 15, marginBottom: 15},
  text: {
    flex: 1,
    marginLeft: 15,
    fontFamily: 'MuseoSansRounded300',
    fontSize: 16,
  },
  textcheckout: {
    flex: 1,
    marginLeft: 30,
    fontFamily: 'MuseoSansRounded300',
    fontSize: 11.5,
    color: '#9BA3A4',
  },
});

class DatepickerOriginal extends Component {
  render() {
    return (
      <View style={styles.root}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1.5, y: 0}}
          colors={['#007EEF', '#40C2F2']}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <View style={styles.wraparrowico}>
                <Image
                  source={require('../../assets/close.png')}
                  style={styles.arrowico}
                />
              </View>
            </TouchableOpacity>
            <View>
              <Text style={styles.textheader}>Kapan Anda mau Check-in?</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const Datepicker = withNavigation(DatepickerOriginal);
export default Datepicker;
