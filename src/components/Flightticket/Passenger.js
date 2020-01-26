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
    height: 50,
    paddingLeft: 15,
    alignItems: 'center',
  },
  aheader: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    paddingHorizontal: 12,
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
  wrapmenu: {borderBottomWidth: 0, borderBottomColor: '#EBEBEB'},
  wrapmenucomp: {height: 60, backgroundColor: '#fff', flexDirection: 'row'},
  wrapicon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  icon: {height: 30, width: 30},
  textcomp: {
    fontFamily: 'MuseoSansRounded500',
    color: '#000',
    fontSize: 16,
    marginLeft: 0,
  },
  textlocation: {
    fontFamily: 'MuseoSansRounded500',
    color: '#000',
    fontSize: 16,
    marginLeft: 0,
    flex: 0,
    paddingTop: 10,
    marginBottom: 5,
  },
  textlocation1: {
    fontFamily: 'MuseoSansRounded500',
    color: '#ADB4B6',
    fontSize: 12,
    marginLeft: 0,
    flex: 0,
    paddingTop: 0,
    marginBottom: 5,
  },

  wraplocation: {
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
    marginLeft: 20,
    width: '100%',
  },
  textlocationtiny: {
    fontSize: 12,
    fontFamily: 'MuseoSansRounded300',
    color: '#ADB4B6',
    marginLeft: 0,
    flex: 1,
    marginBottom: 2,
  },
  search: {
    height: 28,
    backgroundColor: '#E8F7FE',
    borderRadius: 5,
  },
  input: {
    width: '100%',
    fontSize: 11,
    fontFamily: 'MuseoSansRounded500',
  },
  tinyinfo: {
    height: 25,
    backgroundColor: '#ECF0F1',
    justifyContent: 'center',
  },
  textinfo: {
    paddingLeft: 18,
    fontSize: 11,
    color: '#C2C7CB',
    fontFamily: 'MuseoSansRounded500',
  },
  wrapcounter: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  btnmin: {
    backgroundColor: '#fff',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    backgroundColor: '#fff',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnplus: {
    backgroundColor: '#fff',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  font: {fontSize: 30},
});

class PassengerOriginal extends Component {
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
              <Text style={styles.textheader}>Penumpang</Text>
            </View>
          </View>
        </LinearGradient>
        <View style={styles.wrapmenu}>
          <View style={styles.wrapmenucomp}>
            <View style={styles.wrapicon}>
              <View style={styles.wraplocation}>
                <Text style={styles.textlocation}>Dewasa</Text>
                <Text style={styles.textlocation1}>12 tahun keatas</Text>
              </View>
            </View>
            <View style={styles.wrapcounter}>
              <TouchableOpacity>
                <View style={styles.btnmin}>
                  <Text style={styles.font}>-</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.count}>
                <Text>1</Text>
              </View>
              <TouchableOpacity>
                <View style={styles.btnplus}>
                  <Text style={styles.font}>+</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.wrapmenucomp}>
            <View style={styles.wrapicon}>
              <View style={styles.wraplocation}>
                <Text style={styles.textlocation}>Anak</Text>
                <Text style={styles.textlocation1}>2-11 tahun</Text>
              </View>
            </View>
            <View style={styles.wrapcounter}>
              <TouchableOpacity>
                <View style={styles.btnmin}>
                  <Text style={styles.font}>-</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.count}>
                <Text>0</Text>
              </View>
              <TouchableOpacity>
                <View style={styles.btnplus}>
                  <Text style={styles.font}>+</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.wrapmenucomp}>
            <View style={styles.wrapicon}>
              <View style={styles.wraplocation}>
                <Text style={styles.textlocation}>Bayi</Text>
                <Text style={styles.textlocation1}>Di bawah 2 tahun</Text>
              </View>
            </View>
            <View style={styles.wrapcounter}>
              <TouchableOpacity>
                <View style={styles.btnmin}>
                  <Text style={styles.font}>-</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.count}>
                <Text>0</Text>
              </View>
              <TouchableOpacity>
                <View style={styles.btnplus}>
                  <Text style={styles.font}>+</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const Passenger = withNavigation(PassengerOriginal);
export default Passenger;
