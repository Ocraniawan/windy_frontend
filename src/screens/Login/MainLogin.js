import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {withNavigation} from 'react-navigation';

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: '#fff'},
  textheader: {
    fontFamily: 'MuseoSansRounded500',
    color: '#fff',
    fontSize: 16,
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
    marginTop: 20,
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
    fontSize: 12,
    marginTop: 3,
  },
  wrapbanner: {height: 225},
  imgbanner: {height: 225, width: '100%'},
  wraptexttiny: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  texttiny: {color: '#9DA6A7', fontFamily: 'MuseoSansRounded300'},
  wrapsocmed: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  wrapcontent: {alignItems: 'center'},
  ico: {height: 18, width: 18, borderRadius: 3},
  textfb: {
    fontSize: 16,
    color: '#48598E',
    fontFamily: 'MuseoSansRounded500',
    paddingLeft: 10,
  },
  textgoogle: {
    fontSize: 16,
    color: '#E75145',
    fontFamily: 'MuseoSansRounded500',
    paddingLeft: 10,
  },
});
class MainLoginOriginal extends Component {
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
              <Text style={styles.textheader}>Airy Traveler</Text>
            </View>
          </View>
        </LinearGradient>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapbanner}>
            <Image
              source={require('../../assets/bannerlog.jpeg')}
              style={styles.imgbanner}
            />
          </View>
          <View style={styles.wrapcontent}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <View style={styles.buttonlogin}>
                <Text style={styles.textbutton}>MASUK</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Register')}>
              <View style={styles.buttonregister}>
                <Text style={styles.textbutton}>DAFTAR</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.wraptexttiny}>
              <Text style={styles.texttiny}>atau</Text>
            </View>
            <TouchableOpacity>
              <View style={styles.wrapsocmed}>
                <Image
                  source={require('../../assets/fbico.png')}
                  style={styles.ico}
                />
                <Text style={styles.textfb}>Lanjutkan dengan Facebook</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.wrapsocmed}>
                <Image
                  source={require('../../assets/googleico.jpg')}
                  style={styles.ico}
                />
                <Text style={styles.textgoogle}>Lanjutkan dengan Google</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const MainLogin = withNavigation(MainLoginOriginal);
export default MainLogin;
