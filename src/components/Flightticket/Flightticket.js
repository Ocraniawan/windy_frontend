import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Switch} from 'native-base';
import {withNavigation} from 'react-navigation';

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: '#fff'},
  wrapper: {flexDirection: 'row', paddingLeft: 18, paddingTop: 5},
  awrapper: {marginTop: 10},
  wrapicon: {marginRight: 10},
  icon: {height: 34, width: 34},
  wraptext: {
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: '#EDEFF1',
    width: '100%',
  },
  wraptexta: {
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: '#EDEFF1',
    width: '77%',
  },
  wraptext1: {
    width: 240,
  },
  tinytext: {
    fontSize: 11,
    color: '#A0A8AA',
    paddingBottom: 5,
    fontFamily: 'MuseoSansRounded500',
  },
  tinytexta: {
    fontSize: 11,
    color: '#A0A8AA',
    paddingBottom: 5,
    marginLeft: 10,
    fontFamily: 'MuseoSansRounded500',
  },
  text: {
    fontSize: 16,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    fontFamily: 'MuseoSansRounded500',
  },
  wrapcout: {flexDirection: 'row', alignItems: 'flex-end'},
  textcout: {
    color: '#5F5F5F',
    fontSize: 13,
    marginLeft: 12,
    paddingBottom: 2,
    fontFamily: 'MuseoSansRounded500',
  },
  textcout1: {
    color: '#5F5F5F',
    fontSize: 13,
    marginLeft: 0,
    paddingBottom: 2,
    fontFamily: 'MuseoSansRounded500',
  },
  wrappointer: {
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEFF1',
    width: '100%',
  },
  wrapiconpoint: {width: 80, paddingRight: 0},
  wrapswitchico: {
    top: 30,
    backgroundColor: '#fff',
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconswitch: {height: 30, width: 30},
  iconpoint: {height: 40, width: 40},
  button: {
    height: 46,
    width: 345,
    borderRadius: 45,
    backgroundColor: '#FFCA00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapfooter: {alignItems: 'center', marginTop: 22},
  textbutton: {
    fontSize: 16,
    fontFamily: 'MuseoSansRounded700',
  },
  wrapinfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  wrapiconlike: {height: 300, backgroundColor: '#fff'},
  iconlike: {height: 160, width: '100%'},
});

class FlightticketOriginal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggle: false,
    };
  }

  toggle = () => {
    this.setState({isToggle: !this.state.isToggle});
  };

  render() {
    const {isToggle} = this.state;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <View style={styles.awrapper}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Hometown')}>
              <View style={styles.wrapper}>
                <View style={styles.wrapicon}>
                  <Image
                    source={require('../../assets/flight1.jpeg')}
                    style={styles.icon}
                  />
                </View>
                <View style={styles.wraptexta}>
                  <Text style={styles.tinytext}>Kota Asal</Text>
                  <Text style={styles.text}>Pilih Kota Asal</Text>
                </View>
                <View style={styles.wrapswitchico}>
                  <TouchableOpacity>
                    <Image
                      source={require('../../assets/switchico.jpeg')}
                      style={styles.iconswitch}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Destination')}>
              <View style={styles.wrapper}>
                <View style={styles.wrapicon}>
                  <Image
                    source={require('../../assets/flight2.jpeg')}
                    style={styles.icon}
                  />
                </View>
                <View style={styles.wraptext}>
                  <Text style={styles.tinytext}>Kota Tujuan</Text>
                  <Text style={styles.text}>Pilihan Kota Tujuan</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.wrapper}>
                <View style={styles.wrapicon}>
                  <Image
                    source={require('../../assets/date.jpeg')}
                    style={styles.icon}
                  />
                </View>
                <View style={styles.wrappointer}>
                  <View style={styles.wraptext1}>
                    <Text style={styles.tinytext}>Tanggal Berangkat</Text>
                    <Text style={styles.text}>22 Januari 2020</Text>
                  </View>
                  <View style={styles.wrapiconpoint}>
                    <Text style={styles.tinytexta}>Pulang-Pergi?</Text>
                    <Switch
                      onValueChange={this.toggle}
                      onthumbColor="#eee"
                      value={isToggle}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            {isToggle && (
              <TouchableOpacity>
                <View style={styles.wrapper}>
                  <View style={styles.wrapicon}>
                    <Image
                      source={require('../../assets/date.jpeg')}
                      style={styles.icon}
                    />
                  </View>
                  <View style={styles.wrappointer}>
                    <View style={styles.wraptext1}>
                      <Text style={styles.tinytext}>Tanggal Pulang</Text>
                      <Text style={styles.text}>24 Januari 2020</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Passenger')}>
              <View style={styles.wrapper}>
                <View style={styles.wrapicon}>
                  <Image
                    source={require('../../assets/users.jpeg')}
                    style={styles.icon}
                  />
                </View>
                <View style={styles.wraptext}>
                  <Text style={styles.tinytext}>Penumpang</Text>
                  <Text style={styles.text}>1 Penumpang</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapfooter}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ListFlight')}>
              <View style={styles.button}>
                <Text style={styles.textbutton}>Cari Penerbangan</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapinfo}>
            <Image
              source={require('../../assets/like.jpeg')}
              style={styles.icon}
            />
            <Text style={styles.textcout1}>
              Harga Final, Booking Mudah, Transaksi Aman
            </Text>
          </View>
          <View style={styles.wrapiconlike}>
            <Image
              source={require('../../assets/background.jpeg')}
              style={styles.iconlike}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const Flightticket = withNavigation(FlightticketOriginal);
export default Flightticket;
