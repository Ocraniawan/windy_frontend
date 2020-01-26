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
import {connect} from 'react-redux';
import {register} from '../../redux/action/Register';

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
});

class RegisterOriginal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      username: '',
      first_name: '',
      last_name: '',
      phone_number: '',
      email: '',
      password: '',
    };
  }

  register = async () => {
    const {
      title,
      username,
      first_name,
      last_name,
      phone_number,
      email,
      password,
    } = this.state;
    await this.props.dispatch(
      register({
        title_id: title,
        username,
        first_name,
        last_name,
        phone_number,
        email,
        password,
      }),
    );
    console.log(this.props.Register);
    if (this.props.Register.data.succsess) {
      alert('Akun berhasil di buat. Silahkan Login untuk melanjutkan');
      this.props.navigation.navigate('Login');
    } else if (this.props.Register.data.msg) {
      alert('Username/Email sudah digunakan.');
    } else {
      alert('Register gagal.');
    }
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
              <Text style={styles.textheader}>Daftar</Text>
            </View>
          </View>
        </LinearGradient>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapinput}>
            <Form>
              <Item floatingLabel>
                <Label style={styles.lableinput}>Username</Label>
                <Input onChangeText={e => this.setState({username: e})} />
              </Item>
            </Form>
          </View>
          <View style={styles.wrapinput1}>
            <Form>
              <Item floatingLabel>
                <Label style={styles.lableinput}>Title</Label>
                <Input onChangeText={e => this.setState({title: e})} />
              </Item>
            </Form>
          </View>

          <View style={styles.wrapname}>
            <View style={styles.wrapinput}>
              <Form>
                <Item floatingLabel>
                  <Label style={styles.lableinput}>First Name</Label>
                  <Input onChangeText={e => this.setState({first_name: e})} />
                </Item>
              </Form>
            </View>
            <View style={styles.wrapinput}>
              <Form>
                <Item floatingLabel>
                  <Label style={styles.lableinput}>Last Name</Label>
                  <Input onChangeText={e => this.setState({last_name: e})} />
                </Item>
              </Form>
            </View>
          </View>
          <View style={styles.wrapinput}>
            <Form>
              <Item floatingLabel>
                <Label style={styles.lableinput}>Email</Label>
                <Input onChangeText={e => this.setState({email: e})} />
              </Item>
            </Form>
          </View>
          <View style={styles.wrapinput}>
            <Form>
              <Item floatingLabel>
                <Label style={styles.lableinput}>Phone Number</Label>
                <Input onChangeText={e => this.setState({phone_number: e})} />
              </Item>
            </Form>
          </View>
          <View style={styles.wrapinput}>
            <Form>
              <Item floatingLabel>
                <Label style={styles.lableinput}>Password</Label>
                <Input
                  onChangeText={e => this.setState({password: e})}
                  secureTextEntry
                />
              </Item>
            </Form>
          </View>
          <View style={styles.wrapbutton}>
            <TouchableOpacity onPress={this.register}>
              <View style={styles.buttonlogin}>
                <Text style={styles.textbutton}>DAFTAR</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.wrapdaftar}>
            <Text style={styles.texttiny}>Sudah punya akun Airy?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.textblue}>MASUK</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const Register = withNavigation(RegisterOriginal);
const mapStateToProps = state => {
  return {
    Register: state.Register,
  };
};

export default connect(mapStateToProps)(Register);
