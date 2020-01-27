import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {withNavigation} from 'react-navigation';

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: '#fff'},
  wrapmenu: {borderBottomWidth: 1, borderBottomColor: '#EBEBEB'},
  wrapmenucomp: {height: 72, backgroundColor: '#fff'},
  wrapmenucompa: {height: 55, backgroundColor: '#fff'},
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
    marginLeft: 20,
  },
  textcompa: {
    fontFamily: 'MuseoSansRounded500',
    color: '#BFC3C7',
    fontSize: 16,
    marginLeft: 0,
  },
  textlayanan: {
    fontFamily: 'MuseoSansRounded500',
    color: '#000',
    fontSize: 16,
    marginLeft: 20,
    flex: 1,
    paddingTop: 10,
  },
  wraplayanan: {flexDirection: 'column'},
  textlayanantiny: {
    fontSize: 12,
    fontFamily: 'MuseoSansRounded300',
    color: '#444444',
    marginLeft: 20,
    flex: 1,
    marginBottom: 5,
  },
  textheader: {
    fontFamily: 'MuseoSansRounded500',
    color: '#fff',
    fontSize: 16,
  },
  header: {height: 55, justifyContent: 'center', paddingLeft: 15},
  banner: {height: 217, paddingHorizontal: 22, paddingTop: 23},
  titlebanner: {
    fontFamily: 'MuseoSansRounded500',
    color: '#fff',
    fontSize: 16,
  },
  wrapcontentbanner: {
    flexDirection: 'row',
    paddingRight: 22,
    width: 250,
    marginTop: 20,
  },
  iconbanner: {
    width: 84,
    height: 61,
    marginLeft: 5,
    marginRight: 20,
  },
  texinfoban: {
    fontFamily: 'MuseoSansRounded300',
    color: '#fff',
    fontSize: 12,
    marginTop: 3,
  },
  button: {
    height: 46,
    width: '100%',
    marginRight: 20,
    borderRadius: 45,
    backgroundColor: '#FFCA00',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
  },
  textbutton: {
    fontFamily: 'MuseoSansRounded700',
    color: '#000',
    fontSize: 12,
    marginTop: 3,
  },
  bannerlogin: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#F0EFF5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wraptextbanlog: {
    height: 6,
    width: 6,
    backgroundColor: '#00ADEF',
    borderRadius: 50,
  },
  textwelcome: {
    fontFamily: 'MuseoSansRounded500',
    color: '#484848',
    marginLeft: 5,
    fontSize: 14,
  },
  textusername: {
    marginLeft: 5,
    fontFamily: 'MuseoSansRounded500',
    color: '#0AAAE6',
  },
  wraplistmenu: {marginBottom: 20},
  badgeerror: {
    height: 10,
    width: 10,
    backgroundColor: '#FA7A7B',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 38,
    top: 40,
  },
  badgewarning: {
    height: 10,
    width: 10,
    backgroundColor: '#FFCA00',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 38,
    top: 40,
  },
  textbadge: {
    color: '#fff',
    fontSize: 7,
    fontFamily: 'MuseoSansRounded500',
  },
});
class MenuOriginal extends Component {
  render() {
    return (
      <View style={styles.root}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1.5, y: 0}}
          colors={['#007EEF', '#40C2F2']}>
          <View style={styles.header}>
            <Text style={styles.textheader}>Menu</Text>
          </View>
        </LinearGradient>
        <ScrollView showsVerticalScrollIndicator={false}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1.5, y: 0}}
            colors={['#007EEF', '#40C2F2']}>
            <View style={styles.banner}>
              <Text style={styles.titlebanner}>Menjadi Airy Traveler</Text>
              <View style={styles.wrapcontentbanner}>
                <Image
                  source={require('../assets/loginicon.jpeg')}
                  style={styles.iconbanner}
                />
                <Text style={styles.texinfoban}>
                  Masuk atau daftar sekarang dan nikmati kenyamanan pemesanan
                  kamar & tiket pesawat melalui aplikasi Airy
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('MainLogin')}>
                <View style={styles.button}>
                  <Text style={styles.textbutton}>MASUK/DAFTAR</Text>
                </View>
              </TouchableOpacity>
            </View>
          </LinearGradient>

          <TouchableOpacity>
            <View style={styles.bannerlogin}>
              <View style={styles.wraptextbanlog} />
              <Text style={styles.textwelcome}>Selamat datang,</Text>
              <Text style={styles.textusername}>Modi taruna</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.wraplistmenu}>
            <TouchableOpacity>
              <View style={styles.wrapmenu}>
                <View style={styles.wrapmenucomp}>
                  <View style={styles.wrapicon}>
                    <Image
                      source={require('../assets/travelpartner.jpeg')}
                      style={styles.icon}
                    />
                    <Text style={styles.textcomp}>Travel Partner</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Account')}>
              <View style={styles.wrapmenu}>
                <View style={styles.wrapmenucomp}>
                  <View style={styles.wrapicon}>
                    <Image
                      source={require('../assets/completeakun.jpeg')}
                      style={styles.icon}
                    />
                    <Text style={styles.textcomp}>Akun</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Balance')}>
              <View style={styles.wrapmenu}>
                <View style={styles.wrapmenucomp}>
                  <View style={styles.wrapicon}>
                    <Image
                      source={require('../assets/completerefund.jpeg')}
                      style={styles.icon}
                    />
                    <Text style={styles.textcomp}>Top-up Balance</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.wrapmenu}>
                <View style={styles.wrapmenucomp}>
                  <View style={styles.wrapicon}>
                    <Image
                      source={require('../assets/notificon.jpeg')}
                      style={styles.icon}
                    />
                    <Text style={styles.textcomp}>Pengaturan Notifikasi</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.wrapmenu}>
                <View style={styles.wrapmenucomp}>
                  <View style={styles.wrapicon}>
                    <Image
                      source={require('../assets/help.jpeg')}
                      style={styles.icon}
                    />
                    <Text style={styles.textcomp}>Bantuan</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <View style={styles.wrapmenucompa}>
              <View style={styles.wrapicon}>
                <Text style={styles.textcompa}>Layanan Pelanggan</Text>
              </View>
            </View>
            <View style={styles.wrapmenu}>
              <TouchableOpacity>
                <View style={styles.wrapmenucomp}>
                  <View style={styles.wrapicon}>
                    <Image
                      source={require('../assets/call.jpeg')}
                      style={styles.icon}
                    />
                    <View style={styles.wraplayanan}>
                      <Text style={styles.textlayanan}>08041112479</Text>
                      <Text style={styles.textlayanantiny}>Via Telepon</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.wrapmenucomp}>
                  <View style={styles.wrapicon}>
                    <Image
                      source={require('../assets/message.jpeg')}
                      style={styles.icon}
                    />
                    <View style={styles.wraplayanan}>
                      <Text style={styles.textlayanan}>cs@airyrooms.com</Text>
                      <Text style={styles.textlayanantiny}>Via Email</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.wrapmenucomp}>
                  <View style={styles.wrapicon}>
                    <Image
                      source={require('../assets/messenger.jpeg')}
                      style={styles.icon}
                    />
                    <View style={styles.wraplayanan}>
                      <Text style={styles.textlayanan}>AiryIndonesiaCS</Text>
                      <Text style={styles.textlayanantiny}>
                        Via Facebook Messengger
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.wrapmenucomp}>
                  <View style={styles.wrapicon}>
                    <Image
                      source={require('../assets/livechat.jpeg')}
                      style={styles.icon}
                    />
                    <View style={styles.wraplayanan}>
                      <Text style={styles.textlayanan}>Live Chat</Text>
                      <Text style={styles.textlayanantiny}>
                        Layanan Pelanggan 24 jam
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.wrapmenucompa}>
                <View style={styles.wrapicon}>
                  <Text style={styles.textcompa}>Kerjasama</Text>
                </View>
              </View>
              <TouchableOpacity>
                <View style={styles.wrapmenucomp}>
                  <View style={styles.wrapicon}>
                    <Image
                      source={require('../assets/property.jpeg')}
                      style={styles.icon}
                    />
                    <Text style={styles.textcomp}>Daftarkan Properti</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.wrapmenucompa}>
              <View style={styles.wrapicon}>
                <Text style={styles.textcompa}>Tentang Airy Rooms App</Text>
              </View>
            </View>
            <View style={styles.wrapmenucomp}>
              <View style={styles.wrapicon}>
                <Image
                  source={require('../assets/infoicon.jpeg')}
                  style={styles.icon}
                />
                <View style={styles.wraplayanan}>
                  <Text style={styles.textlayanan}>v1.24.5 (12405)</Text>
                  <Text style={styles.textlayanantiny}>Versi Aplikasi</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const Menu = withNavigation(MenuOriginal);
export default Menu;
