import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Form, Item, Input, Label} from 'native-base';

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
    marginTop: 10,
  },
  wrapbutton: {alignItems: 'center'},
  wrapinput: {paddingHorizontal: 20},
  lableinput: {
    fontSize: 16,
    fontFamily: 'MuseoSansRounded500',
    color: '#BCC3C5',
  },
  textbutton: {
    fontFamily: 'MuseoSansRounded700',
    color: '#000',
    fontSize: 13,
    marginTop: 3,
  },
  iconemail: {
    height: 210,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconemail1: {height: 160, width: 160},
  wrapcontent: {paddingLeft: 30, paddingRight: 40},
  textbold: {
    fontFamily: 'MuseoSansRounded700',
    fontSize: 16,
    paddingBottom: 10,
  },
  textnormal: {
    fontFamily: 'MuseoSansRounded500',
    fontSize: 13,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class ForgotPass extends Component {
  render() {
    return (
      <View style={styles.root}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1.5, y: 0}}
          colors={['#007EEF', '#40C2F2']}>
          <View style={styles.header}>
            <TouchableOpacity>
              <View style={styles.wraparrowico}>
                <Image
                  source={require('../../assets/arrow.jpeg')}
                  style={styles.arrowico}
                />
              </View>
            </TouchableOpacity>
            <View>
              <Text style={styles.textheader}>
                Reset password Airy Traveler
              </Text>
            </View>
          </View>
        </LinearGradient>
        <View style={styles.iconemail}>
          <Image
            source={require('../../assets/iconemail.jpeg')}
            style={styles.iconemail1}
          />
        </View>

        <View>
          <View style={styles.wrapcontent}>
            <Text style={styles.textbold}>Request kode verifikasi</Text>
            <Text style={styles.textnormal}>
              Kode verifikasi dan petunjuk pengaturan password baru akan
            </Text>
            <Text style={styles.textnormal}>
              dikirim ke email Anda. Silakan masukkan email akun Airy Anda:
            </Text>
          </View>
        </View>
        <View style={styles.wrapinput}>
          <Form>
            <Item floatingLabel>
              <Label style={styles.lableinput}>Email</Label>
              <Input />
            </Item>
          </Form>
        </View>
        <View style={styles.wrapbutton}>
          <TouchableOpacity>
            <View style={styles.buttonlogin}>
              <Text style={styles.textbutton}>SUBMIT</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
