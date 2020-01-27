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
import {Dropdown} from 'react-native-material-dropdown';

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
  wrapcontent1: {
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 10,
    paddingBottom: 20,
  },
  wrapitems: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  wrapinfo: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 20,
  },
  wrapdatatamu: {
    backgroundColor: '#D1F3FF',
    borderWidth: 1,
    borderColor: '#16A5DB',
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  wrapdatatamu1: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  wrapbtn: {
    backgroundColor: '#FFCA00',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: 40,
  },
  bottom: {flexDirection: 'row', backgroundColor: '#fff', padding: 20},
  img: {width: 80, height: 80, borderRadius: 5},
  wraprighitem: {flex: 1, marginHorizontal: 20},
  wrapinfo1: {flexDirection: 'row', paddingHorizontal: 5},
  nama: {flex: 1, fontSize: 12},
  harga: {fontSize: 12},
  wrapdata: {marginTop: 10, marginLeft: 10},
  price: {fontSize: 16},
  wraptitle: {marginTop: 10, marginLeft: 10},
});

class OrderProcessOriginal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      duration: '',
      total: '',
    };
  }

  componentDidMount() {
    const date = this.props.navigation.getParam('date');
    const duration = this.props.navigation.getParam('duration');
    const total = this.props.navigation.getParam('total');

    this.buildData(date, duration, total);
  }

  buildData = (date, duration, total) => {
    this.setState({
      date,
      duration,
      total,
    });
  };

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
              <Text style={styles.textheader}>Pemesanan Anda</Text>
            </View>
          </View>
        </LinearGradient>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1.5, y: 0}}
          colors={['#007EEF', '#40C2F2']}>
          <View style={styles.header}>
            <View>
              <Text style={styles.textheader2}>PESAN</Text>
            </View>
          </View>
        </LinearGradient>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapcontent}>
            <View style={styles.title}>
              <Text style={styles.textheader11}>INFORMASI KONTAK</Text>
            </View>
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
          </View>

          {/* DETAIL ROOM */}
          <View style={styles.wrapcontent1}>
            <View style={styles.wrapitems}>
              <Image
                source={require('../../assets/kamar.jpeg')}
                style={styles.img}
              />
              <View style={styles.wraprighitem}>
                <Text>Airy BaranangSiang</Text>
                <Text>Bogor, Jawa Barat</Text>
                <Text>
                  {this.state.date} - {this.state.date + this.state.duration}
                </Text>
              </View>
            </View>
            <View style={styles.wrapinfo}>
              <View style={styles.wrapinfo1}>
                <Text style={styles.nama}>
                  Airy Rooms Standard Single 3 Malam (x1)
                </Text>
                <Text style={styles.harga}> Rp {this.state.total}</Text>
              </View>
            </View>
            <View style={styles.wrapdata}>
              <Text style={styles.textheader11}>DATA TAMU</Text>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Guestdata')}>
              <View style={styles.wrapdatatamu}>
                <Text>Isi data tamu</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.wrapdatatamu1}>
                <Text>Tn. Amudia</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* BOTTOM */}
        <View style={styles.bottom}>
          <View style={styles.flex}>
            <Text>Total Pembayaran</Text>
            <Text style={styles.price}>Rp {this.state.total}</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Payment')}>
            <View style={styles.wrapbtn}>
              <Text>LANJUT</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const OrderProcess = withNavigation(OrderProcessOriginal);
const mapStateToProps = state => {
  return {
    login: state.login,
  };
};

export default connect(mapStateToProps)(OrderProcess);
