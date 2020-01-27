import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView} from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';

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
  buttonlogin: {
    height: 46,
    width: 345,
    borderRadius: 45,
    backgroundColor: '#FFCA00',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 65,
  },
  buttonregister: {
    height: 46,
    width: 345,
    borderRadius: 45,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#BEC3C6',
  },
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

class ListDurasiOriginal extends Component {
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
              <Text style={styles.textheader}>Berapa Malam?</Text>
            </View>
          </View>
        </LinearGradient>
        <ScrollView>
          <View>
            <TouchableOpacity>
              <View style={styles.wraplist}>
                <Text style={styles.text}>1 malam</Text>
                <Text style={styles.textcheckout}>
                  Check-out: 24 Januari 2020
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.wraplist}>
                <Text style={styles.text}>2 malam</Text>
                <Text style={styles.textcheckout}>
                  Check-out: 24 Januari 2020
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.wraplist}>
                <Text style={styles.text}>3 malam</Text>
                <Text style={styles.textcheckout}>
                  Check-out: 24 Januari 2020
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.wraplist}>
                <Text style={styles.text}>4 malam</Text>
                <Text style={styles.textcheckout}>
                  Check-out: 24 Januari 2020
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.wraplist}>
                <Text style={styles.text}>5 malam</Text>
                <Text style={styles.textcheckout}>
                  Check-out: 24 Januari 2020
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.wraplist}>
                <Text style={styles.text}>6 malam</Text>
                <Text style={styles.textcheckout}>
                  Check-out: 24 Januari 2020
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.wraplist}>
                <Text style={styles.text}>7 malam</Text>
                <Text style={styles.textcheckout}>
                  Check-out: 24 Januari 2020
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.wraplist}>
                <Text style={styles.text}>8 malam</Text>
                <Text style={styles.textcheckout}>
                  Check-out: 24 Januari 2020
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.wraplist}>
                <Text style={styles.text}>9 malam</Text>
                <Text style={styles.textcheckout}>
                  Check-out: 24 Januari 2020
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.wraplist}>
                <Text style={styles.text}>10 malam</Text>
                <Text style={styles.textcheckout}>
                  Check-out: 24 Januari 2020
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.wraplist}>
                <Text style={styles.text}>11 malam</Text>
                <Text style={styles.textcheckout}>
                  Check-out: 24 Januari 2020
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.wraplist}>
                <Text style={styles.text}>12 malam</Text>
                <Text style={styles.textcheckout}>
                  Check-out: 24 Januari 2020
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.wraplist}>
                <Text style={styles.text}>13 malam</Text>
                <Text style={styles.textcheckout}>
                  Check-out: 24 Januari 2020
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.wraplist}>
                <Text style={styles.text}>14 malam</Text>
                <Text style={styles.textcheckout}>
                  Check-out: 24 Januari 2020
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const ListDurasi = withNavigation(ListDurasiOriginal);
const mapStateToProps = state => {
  return {
    guest: state.guest,
  };
};
export default connect(mapStateToProps)(ListDurasi);
