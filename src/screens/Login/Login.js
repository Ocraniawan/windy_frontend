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
import {postLogin} from '../../redux/action/Login';
import {connect} from 'react-redux';
// import AwesomeAlert from 'react-native-awesome-alerts';

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
  wraplogo: {height: 140, alignItems: 'center', justifyContent: 'center'},
  icologo: {height: 70, width: 130, marginTop: 25},
  wrapinput: {paddingHorizontal: 20},
  lableinput: {
    fontSize: 16,
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
    marginTop: 35,
    flexDirection: 'row',
  },
  texttiny: {
    color: '#808B8D',
    fontFamily: 'MuseoSansRounded500',
    fontSize: 12,
  },
});

class LoginOriginal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showAlert: false,
    };
  }

  login = async () => {
    const {username, password} = this.state;
    await this.props.dispatch(
      postLogin({
        username,
        password,
      }),
    );
    this.cekAuth();
  };

  cekAuth = () => {
    if (this.props.login.data.succes) {
      // this.setState({showAlert: true});
      alert('Login success');
      this.props.navigation.navigate('Cari');
    } else {
      alert('Login failed');
      // this.setState({showAlert: true});
    }
  };

  handleUser = username => {
    this.setState({username});
  };

  handlePass = password => {
    this.setState({password});
  };

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
              <Text style={styles.textheader}>Masuk</Text>
            </View>
          </View>
        </LinearGradient>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wraplogo}>
            <Image
              source={require('../../assets/logo.png')}
              style={styles.icologo}
            />
          </View>

          <View style={styles.wrapinput}>
            <Form>
              <Item floatingLabel>
                <Label style={styles.lableinput}>Email/Username</Label>
                <Input onChangeText={e => this.handleUser(e)} />
              </Item>
              <Item floatingLabel>
                <Label style={styles.lableinput}>Password</Label>
                <Input secureTextEntry onChangeText={e => this.handlePass(e)} />
              </Item>
            </Form>
          </View>
          <View style={styles.wrapbutton}>
            <TouchableOpacity onPress={this.login}>
              <View style={styles.buttonlogin}>
                <Text style={styles.textbutton}>MASUK</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ForgotPass')}>
            <View style={styles.wraptextforgot}>
              <Text style={styles.textblue}>LUPA PASSWORD?</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.wrapdaftar}>
            <Text style={styles.texttiny}>Belum punya akun Airy?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={styles.textblue}>DAFTAR</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const Login = withNavigation(LoginOriginal);
const mapStateToProps = state => {
  return {
    login: state.login,
  };
};

export default connect(mapStateToProps)(Login);
