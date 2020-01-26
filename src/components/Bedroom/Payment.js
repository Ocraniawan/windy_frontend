import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {withNavigation} from 'react-navigation';

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: '#ebebeb'},
  textheader: {
    fontFamily: 'MuseoSansRounded500',
    color: '#fff',
    fontSize: 16,
  },
  textheader2: {
    fontFamily: 'MuseoSansRounded500',
    color: '#fff',
    fontSize: 14,
  },

  textheader1: {
    fontFamily: 'MuseoSansRounded300',
    color: '#000',
    fontSize: 14,
  },
  textheader11: {
    fontFamily: 'MuseoSansRounded300',
    color: '#BEC3C6',
    fontSize: 14,
  },
  header: {
    flexDirection: 'row',
    height: 55,
    paddingLeft: 15,
    alignItems: 'center',
  },
  wraparrowico: {
    width: 55,
    height: 55,
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
    marginTop: 25,
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
  wraplogo: {height: 140, alignItems: 'center', justifyContent: 'center'},
  icologo: {height: 70, width: 130, marginTop: 25},
  wrapinput: {paddingHorizontal: 20, flex: 1},
  wrapinput2: {paddingHorizontal: 20, flex: 1, flexDirection: 'row'},
  wrapinput1: {paddingHorizontal: 20, marginLeft: 15, flex: 1},
  lableinput: {
    fontSize: 12,
    fontFamily: 'MuseoSansRounded500',
    color: '#BCC3C5',
  },
  wrapbutton: {alignItems: 'center'},
  wraptextforgot: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  textblue: {
    color: '#14A6DD',
    fontFamily: 'MuseoSansRounded700',
    fontSize: 12,
    paddingLeft: 10,
  },
  wrapdaftar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    flexDirection: 'row',
  },
  texttiny: {
    color: '#808B8D',
    fontFamily: 'MuseoSansRounded500',
    fontSize: 12,
  },
  wrapname: {flexDirection: 'row'},
  wrapcontent: {elevation: 3, backgroundColor: '#fff', paddingBottom: 20},
  wrapubah: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  wraplogout: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 50,
  },

  textubah: {
    color: '#40C2F2',
    fontFamily: 'MuseoSansRounded700',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  textlogout: {
    color: '#40C2F2',
    fontFamily: 'MuseoSansRounded500',
    fontSize: 14,
  },
  flex: {flex: 1},
  wrapjumlah: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 15,
    marginTop: 15,
  },
  wraplogo1: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 5,
    elevation: 2,
    marginBottom: 20,
    alignItems: 'center',
  },
  colorblue: {color: '#40C2F2'},
  logo: {width: 90, height: 60},
});

class AccountOriginal extends Component {
  rupiah(angka) {
    var rupiah = '';
    var angkarev = angka
      .toString()
      .split('')
      .reverse()
      .join('');
    for (var i = 0; i < angkarev.length; i++) {
      if (i % 3 === 0) {
        rupiah += angkarev.substr(i, 3) + '.';
      }
    }
    return (
      'Rp.' +
      rupiah
        .split('', rupiah.length - 1)
        .reverse()
        .join('')
    );
  }
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
                  source={require('../../assets/arrow.jpeg')}
                  style={styles.arrowico}
                />
              </View>
            </TouchableOpacity>
            <View>
              <Text style={styles.textheader}>Metode Pembayaran</Text>
            </View>
          </View>
        </LinearGradient>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1.5, y: 0}}
          colors={['#007EEF', '#40C2F2']}>
          <View style={styles.header}>
            <View>
              <Text style={styles.textheader2}>BAYAR</Text>
            </View>
          </View>
        </LinearGradient>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapjumlah}>
            <View style={styles.flex}>
              <Text>JUMLAH YANG AKAN DI BAYAR</Text>
              <Text>{this.rupiah('822000')}</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.colorblue}>PESANAN</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <View style={styles.wraplogo1}>
              <Text style={styles.flex}>Airy Balance</Text>
              <ImageBackground
                source={require('../../assets/logoairy.png')}
                style={styles.logo}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const Account = withNavigation(AccountOriginal);
export default Account;
