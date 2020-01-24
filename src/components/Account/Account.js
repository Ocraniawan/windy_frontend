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
import {Form, Item, Input, Label} from 'native-base';
import {withNavigation} from 'react-navigation';
import {Dropdown} from 'react-native-material-dropdown';

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: '#fff'},
  textheader: {
    fontFamily: 'MuseoSansRounded500',
    color: '#fff',
    fontSize: 16,
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
  wrapcontent: {marginTop: 15},
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
});

class AccountOriginal extends Component {
  render() {
    let data = [
      {
        value: 'Mr',
      },
      {
        value: 'Mrs',
      },
      {
        value: 'MR',
      },
    ];
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
              <Text style={styles.textheader}>Akun</Text>
            </View>
          </View>
        </LinearGradient>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapcontent}>
            <View style={styles.wrapinput}>
              <Form>
                <Item floatingLabel>
                  <Label style={styles.lableinput}>Username</Label>
                  <Input value="aktaruna26" style={styles.textheader1} />
                </Item>
              </Form>
            </View>
            <View style={styles.wrapinput1}>
              <Dropdown label="Title" data={data} />
            </View>

            <View style={styles.wrapname}>
              <View style={styles.wrapinput}>
                <Form>
                  <Item floatingLabel>
                    <Label style={styles.lableinput}>First Name</Label>
                    <Input value="Amudia" style={styles.textheader1} />
                  </Item>
                </Form>
              </View>
              <View style={styles.wrapinput}>
                <Form>
                  <Item floatingLabel>
                    <Label style={styles.lableinput}>Last Name</Label>
                    <Input value="Kalpa Taruna" style={styles.textheader1} />
                  </Item>
                </Form>
              </View>
            </View>
            <View style={styles.wrapinput2}>
              <View style={styles.flex}>
                <Form>
                  <Item floatingLabel>
                    <Label style={styles.lableinput}>Password</Label>
                    <Input
                      value="amudia"
                      style={styles.textheader11}
                      secureTextEntry
                      disabled
                    />
                  </Item>
                </Form>
              </View>
              <View style={styles.wrapubah}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('ChangePass')}>
                  <Text style={styles.textubah}>UBAH</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.wrapinput}>
              <Form>
                <Item floatingLabel>
                  <Label style={styles.lableinput}>Email</Label>
                  <Input
                    value="ak.taruna0420@gmail.com"
                    style={styles.textheader11}
                    disabled
                  />
                </Item>
              </Form>
            </View>
            <View style={styles.wrapinput}>
              <Form>
                <Item floatingLabel>
                  <Label style={styles.lableinput}>Phone Number</Label>
                  <Input value="089623201606" style={styles.textheader1} />
                </Item>
              </Form>
            </View>
            <View style={styles.wrapbutton}>
              <TouchableOpacity>
                <View style={styles.buttonlogin}>
                  <Text style={styles.textbutton}>SIMPAN</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.wraplogout}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ChangePass')}>
                <Text style={styles.textlogout}>LOGOUT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const Account = withNavigation(AccountOriginal);
export default Account;
