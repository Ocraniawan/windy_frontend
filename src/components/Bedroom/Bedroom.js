import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {withNavigation} from 'react-navigation';

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: '#fff'},
  wrapper: {flexDirection: 'row', paddingLeft: 13, paddingTop: 15},
  awrapper: {marginTop: 20},
  wrapicon: {marginRight: 10},
  icon: {height: 34, width: 34},
  wraptext: {
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: '#EDEFF1',
    width: '100%',
  },
  wraptext1: {
    width: 270,
  },
  tinytext: {
    fontSize: 12,
    color: '#A0A8AA',
    marginBottom: 5,
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
  wrapiconpoint: {width: 40},
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

class BedroomOriginal extends Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <View styles={styles.awrapper}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SearchLoc')}>
              <View style={styles.wrapper}>
                <View style={styles.wrapicon}>
                  <Image
                    source={require('../../assets/loc.jpeg')}
                    style={styles.icon}
                  />
                </View>
                <View style={styles.wrappointer}>
                  <View style={styles.wraptext1}>
                    <Text style={styles.tinytext}>Airy Rooms di Sekitar</Text>
                    <Text style={styles.text}>Bogor</Text>
                  </View>
                  <View style={styles.wrapiconpoint}>
                    <Image
                      source={require('../../assets/point.jpeg')}
                      style={styles.iconpoint}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Datepicker')}>
              <View style={styles.wrapper}>
                <View style={styles.wrapicon}>
                  <Image
                    source={require('../../assets/date.jpeg')}
                    style={styles.icon}
                  />
                </View>
                <View style={styles.wraptext}>
                  <Text style={styles.tinytext}>Check-in</Text>
                  <Text style={styles.text}>21 Januari 2020</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ListDurasi')}>
              <View style={styles.wrapper}>
                <View style={styles.wrapicon}>
                  <Image
                    source={require('../../assets/date1.jpeg')}
                    style={styles.icon}
                  />
                </View>
                <View style={styles.wraptext}>
                  <Text style={styles.tinytext}>Durasi Menginap</Text>
                  <View style={styles.wrapcout}>
                    <Text style={styles.text}>1 Malam</Text>
                    <Text style={styles.textcout}>
                      (Check-out: 22 Januari 2020)
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapfooter}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ListBedroom')}>
              <View style={styles.button}>
                <Text style={styles.textbutton}>Cari Kamar Airy Rooms</Text>
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
const Bedroom = withNavigation(BedroomOriginal);
export default Bedroom;
