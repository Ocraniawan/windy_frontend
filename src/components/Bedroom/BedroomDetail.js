import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import {detailHotel} from '../../redux/action/Detailhotel';
import {Spinner, Input} from 'native-base';
import DatePicker from 'react-native-datepicker';

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: '#F3F3F3', position: 'relative'},
  header: {
    height: 50,
    width: '100%',
    backgroundColor: 'transparent',
    position: 'absolute',
    padding: 15,
    zIndex: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrappoint: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  iconheader: {height: 28, width: 28},
  iconheadera: {height: 20, width: 20},
  gambarkamar: {height: 300, width: '100%'},
  wrapdetail: {
    backgroundColor: '#ffffff',
    margin: 7,
    marginTop: 15,
    borderRadius: 3,
    elevation: 2,
    flexDirection: 'column',
  },
  wrapdetaila: {
    marginHorizontal: 10,
    paddingTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ECF0F1',
  },
  wrapitem: {flexDirection: 'row'},
  wrapiconmap: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
    marginHorizontal: 10,
  },
  iconmap: {height: 85, width: 65},
  wraptextdetail: {flexDirection: 'column', flex: 1},
  texttinyinfo: {
    width: 60,
    fontFamily: 'MuseoSansRounded700',
    fontSize: 8,
    backgroundColor: '#00ADEF',
    paddingVertical: 4,
    paddingHorizontal: 8,
    color: '#fff',
    borderRadius: 4,
  },
  texttitle: {
    fontFamily: 'MuseoSansRounded500',
    fontSize: 16,
    paddingVertical: 4,
    marginTop: 5,
    color: '#000',
    borderRadius: 4,
  },
  textloc: {
    fontFamily: 'MuseoSansRounded300',
    fontSize: 12,
    paddingVertical: 4,
    color: '#737373',
    borderRadius: 4,
  },
  wraptitlecard: {flexDirection: 'row', marginHorizontal: 23, marginTop: 10},
  texttitlecard: {
    fontFamily: 'MuseoSansRounded500',
    fontSize: 12,
    paddingVertical: 4,
    color: '#808B8D',
    borderRadius: 4,
    flex: 0,
  },
  texttinyblue: {
    fontFamily: 'MuseoSansRounded700',
    fontSize: 12,
    paddingVertical: 4,
    color: '#1DA9DE',
    textDecorationLine: 'underline',
    flex: 1,
    textAlign: 'right',
  },
  texttinybluea: {
    fontFamily: 'MuseoSansRounded500',
    fontSize: 11,
    marginTop: 0,
    marginBottom: 13,
    color: '#1DA9DE',
    textDecorationLine: 'underline',
  },

  wrapfacility: {flexDirection: 'row', marginVertical: 5, marginHorizontal: 10},
  wrapiconfacility: {alignItems: 'center', padding: 5, width: 70},
  textfacility: {
    fontFamily: 'MuseoSansRounded300',
    textAlign: 'center',
    fontSize: 10,
    color: '#000',
    borderRadius: 4,
  },
  wrapriview: {
    backgroundColor: '#ffffff',
    margin: 7,
    borderRadius: 10,
    elevation: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgbackgroundriview: {
    shadowColor: '#000',
    height: 120,
    width: '100%',
    elevation: 2,
    backgroundColor: 'rgba(0,0,0,0.5) transparent',
    justifyContent: 'center',
  },
  wraptextriview: {
    height: 120,
    width: 380,
    backgroundColor: 'rgba(0,0,0,0.5) transparent',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textriview: {
    fontFamily: 'MuseoSansRounded700',
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 3,
  },
  textnama: {
    fontFamily: 'MuseoSansRounded300',
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 3,
    marginTop: 15,
  },
  wrapinfo: {
    backgroundColor: '#ffffff',
    margin: 7,
    borderRadius: 3,
    elevation: 2,
    flexDirection: 'column',
  },
  texttitlecarda: {flexDirection: 'row', marginHorizontal: 18, marginTop: 10},
  wrapdetailinfo: {
    marginHorizontal: 18,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
  },
  badgetiny: {
    height: 4,
    width: 4,
    backgroundColor: '#00ADEF',
    borderRadius: 50,
    marginRight: 10,
  },
  textinfo: {fontFamily: 'MuseoSansRounded300', fontSize: 11.5, color: '#000'},
  textinfoa: {
    fontFamily: 'MuseoSansRounded300',
    fontSize: 11.5,
    color: '#000',
    marginVertical: 7,
  },
  textinfoa1: {
    fontFamily: 'MuseoSansRounded300',
    fontSize: 11.5,
    color: '#000',
    marginTop: 3,
  },

  textlinetr: {
    fontFamily: 'MuseoSansRounded300',
    textDecorationLine: 'line-through',
    fontSize: 11.5,
    color: '#000',
    marginTop: 3,
  },
  textprice: {
    fontFamily: 'MuseoSansRounded700',
    fontSize: 16,
    color: '#427E03',
    marginTop: 3,
  },
  textprice1: {
    fontFamily: 'MuseoSansRounded700',
    fontSize: 16,
    color: '#599711',
    marginTop: 0,
  },
  textbuttonpilih: {
    fontFamily: 'MuseoSansRounded700',
    fontSize: 16,
    color: '#000',
    marginTop: 3,
  },

  wrapinforoom: {
    backgroundColor: '#ffffff',
    margin: 7,
    borderRadius: 3,
    elevation: 2,
    flexDirection: 'column',
  },
  borderbottom: {
    marginTop: 15,
  },
  borderitem: {
    borderWidth: 1,
    borderColor: '#ECF0F1',
    height: 45,
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },

  texttiny: {
    fontFamily: 'MuseoSansRounded300',
    fontSize: 11,
    paddingVertical: 2,
    color: '#808B8D',
  },
  texttiny1: {
    fontFamily: 'MuseoSansRounded500',
    fontSize: 11,
    paddingVertical: 2,
    color: '#808B8D',
  },

  wraptextmedium: {flexDirection: 'row', alignItems: 'center'},
  textmedium: {
    fontFamily: 'MuseoSansRounded500',
    fontSize: 16,
    paddingVertical: 2,
    color: '#000',
    marginRight: 5,
  },
  badgemed: {
    height: 8,
    width: 8,
    backgroundColor: '#00ADEF',
    borderRadius: 50,
    marginRight: 10,
  },
  flex: {flex: 1},
  wrapsuggesroom: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ECF0F1',
    paddingHorizontal: 15,
    paddingTop: 10,
    marginTop: 15,
    paddingBottom: 15,
  },
  wrapsuggesroom1: {
    flexDirection: 'row',
    backgroundColor: '#F9FFF1',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#729943',
    borderBottomColor: '#729943',
    paddingHorizontal: 15,
    paddingTop: 10,
    marginTop: 15,
    paddingBottom: 15,
  },

  wrapleftitem: {flex: 1, justifyContent: 'center'},
  wraprightitem: {
    flex: 0,
    alignItems: 'center',
    paddingTop: 5,
  },
  button: {
    height: 35,
    width: 100,
    backgroundColor: '#FFCA00',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
  textbutton: {fontFamily: 'MuseoSansRounded700', fontSize: 16},
  btnmin: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbtnmin: {
    fontSize: 30,
    fontFamily: 'MuseoSansRounded700',
  },
  value: {
    backgroundColor: '#fff',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnplus: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbtnplus: {
    fontSize: 30,
    fontFamily: 'MuseoSansRounded700',
  },
  wrapbottom: {flexDirection: 'row'},
  wrapbutton1: {
    flex: 1,
    paddingHorizontal: 14,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  wrappesanan: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    height: 70,
    paddingTop: 5,
  },
  button1: {
    height: 55,
    width: 130,
    backgroundColor: '#FFCA00',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});

class BedroomDetailOriginal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: '',
      nights: '',
      isSelected: false,
      total: '0',
      room_type: '',
      date: '',
      duration: '',
    };
  }

  componentDidMount() {
    const id = this.props.navigation.getParam('id_hotel');
    this.getDetailHotel(id);
  }

  getDetailHotel = async id => {
    await this.props.dispatch(detailHotel(id));
  };

  handleSelect = (price, room_type) => {
    this.setState({
      price,
      room_type,
      isSelected: !this.state.isSelected,
      nights: Number(this.state.nights) + 1,
      total:
        (Number(this.state.nights) + 1) *
        Number(price) *
        Number(this.state.duration),
    });
  };

  handleDuration = duration => {
    this.setState({
      duration,
    });
  };

  addNights = () => {
    this.setState({
      nights: Number(this.state.nights) + 1,
      total:
        (Number(this.state.nights) + 1) *
        Number(this.state.price) *
        Number(this.state.duration),
    });
  };

  removeNights = () => {
    if (Number(this.state.nights) >= 1) {
      this.setState({
        nights: Number(this.state.nights) - 1,
        total:
          (Number(this.state.nights) - 1) *
          Number(this.state.price) *
          Number(this.state.duration),
      });
    }
    if (Number(this.state.nights) === 1) {
      this.setState({isSelected: false});
    }
  };

  render() {
    const {price, nights, isSelected, total, room_type, duration} = this.state;
    return (
      <View style={styles.root}>
        <View style={styles.header}>
          {/* <TouchableOpacity onPress={this.props.navigation.goBack()}> */}
          <Image
            source={require('../../assets/chevron-left.png')}
            style={styles.iconheader}
          />
          {/* </TouchableOpacity> */}
          <Image
            source={require('../../assets/share-2.png')}
            style={styles.iconheadera}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Image
              source={require('../../assets/kamar.jpeg')}
              style={styles.gambarkamar}
            />
          </View>
          {/* DETAIL ROOMS */}
          {!this.props.detailhotel.isLoading &&
            this.props.detailhotel.data.data && (
              <View style={styles.wrapdetail}>
                <View style={styles.wrapdetaila}>
                  <View style={styles.wrapitem}>
                    <View style={styles.wrapiconmap}>
                      <Image
                        source={require('../../assets/mapping.jpeg')}
                        style={styles.iconmap}
                      />
                    </View>
                    <View style={styles.wraptextdetail}>
                      <Text style={styles.texttinyinfo}>AIRY ROOMS</Text>
                      <Text style={styles.texttitle}>
                        {this.props.detailhotel.data.data.name}
                      </Text>
                      <Text style={styles.textloc}>
                        {this.props.detailhotel.data.data.address}
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={styles.wraptitlecard}>
                  <Text style={styles.texttitlecard}>STANDAR KENYAMANAN</Text>
                  <Text style={styles.texttinyblue}>Lihat Semua</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={styles.wrapfacility}>
                    <View style={styles.wrapiconfacility}>
                      <Icon
                        name="router-wireless"
                        size={28}
                        color={'#1DA9DE'}
                      />
                      <Text style={styles.textfacility}>WIFI Gratis</Text>
                    </View>
                  </View>
                </ScrollView>
              </View>
            )}
          {this.props.detailhotel.isLoading && (
            <View style={styles.wrappoint}>
              <Spinner color="blue" />
            </View>
          )}

          {/* RIVIEWS */}
          <View style={styles.wrapriview}>
            <ImageBackground
              source={require('../../assets/kamar.jpeg')}
              style={styles.imgbackgroundriview}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.wraptextriview}>
                  <Text style={styles.textriview}>nyaman</Text>
                  <Text style={styles.textnama}>Nissa A.,26 Oktober 2019</Text>
                </View>
              </ScrollView>
            </ImageBackground>
          </View>

          {/* important information */}
          <View style={styles.wrapinfo}>
            <View style={styles.texttitlecarda}>
              <Text style={styles.texttitlecard}>INFORMASI PENTING</Text>
            </View>

            <View style={styles.wrapdetailinfo}>
              <View style={styles.badgetiny} />
              <Text style={styles.textinfo}>
                Jam check-in mulai pukul 14:00, dan check-out sebelum pukul
                12:00.
              </Text>
            </View>
          </View>
          {/* Room availability */}
          <View style={styles.wrapinforoom}>
            <View style={styles.texttitlecarda}>
              <Text style={styles.texttitlecard}>KETERSEDIAAN KAMAR</Text>
            </View>
            <View style={styles.borderbottom}>
              <View style={styles.borderitem}>
                <TouchableOpacity style={styles.flex}>
                  <View>
                    <Text style={styles.texttiny}>Check-in</Text>
                    <View style={styles.wraptextmedium}>
                      <DatePicker
                        style={styles.date}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate={new Date()}
                        maxDate="2096-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}
                        onDateChange={date => {
                          this.setState({date});
                        }}
                        customStyles={{dateInput: {borderWidth: 0}}}
                      />
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.flex}
                  onPress={() => this.props.navigation.navigate('ListDurasi')}>
                  <View>
                    <Text style={styles.texttiny}>Durasi Menginap</Text>
                    <View style={styles.wraptextmedium}>
                      <Input
                        keyboardType="number-pad"
                        value={duration}
                        onChangeText={e => this.handleDuration(e)}
                      />
                      <Text style={styles.textmedium}> Malam</Text>
                      <View style={styles.badgemed} />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {!isSelected && nights >= 0 ? (
              // this.props.detailhotel.data
              !this.props.detailhotel.isLoading &&
              this.props.detailhotel.data.rooms &&
              this.props.detailhotel.data.rooms.map((v, i) => (
                <View key={i} style={styles.wrapsuggesroom}>
                  <View style={styles.wrapleftitem}>
                    <Text style={styles.texttinybluea}>{v.room_type}</Text>
                    <Text style={styles.textinfoa}>2 Tamu / Kamar</Text>
                    <Text style={styles.textinfoa}>Tidak Termasuk Sarapan</Text>
                    <Text style={styles.textinfoa}>Double</Text>
                    <Text style={styles.textinfoa}>Tidak dapat dibatalkan</Text>
                  </View>
                  <View style={styles.wraprightitem}>
                    <Text style={styles.texttiny}>Harga Per Malam</Text>
                    <Text style={styles.textprice}>Rp {v.price}</Text>
                    {this.props.login.data.auth && (
                      <TouchableOpacity
                        onPress={() => this.handleSelect(v.price, v.room_type)}>
                        <View style={styles.button}>
                          <Text style={styles.textbutton}>Pilih</Text>
                        </View>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              ))
            ) : (
              <View style={styles.wrapsuggesroom1}>
                <View style={styles.wrapleftitem}>
                  <Text style={styles.texttinybluea}>{room_type}</Text>
                  <Text style={styles.textinfoa}>2 Tamu / Kamar</Text>
                  <Text style={styles.textinfoa}>Tidak Termasuk Sarapan</Text>
                  <Text style={styles.textinfoa}>Double</Text>
                  <Text style={styles.textinfoa}>Tidak dapat dibatalkan</Text>
                </View>
                <View style={styles.wraprightitem}>
                  <Text style={styles.texttiny}>Harga Per Malam</Text>
                  <Text style={styles.textprice}>Rp {price}</Text>
                  <View style={styles.button}>
                    <TouchableOpacity onPress={this.removeNights}>
                      <View style={styles.btnmin}>
                        <Text style={styles.textbtnmin}>-</Text>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.value}>
                      <Text>{nights}</Text>
                    </View>
                    <TouchableOpacity onPress={this.addNights}>
                      <View style={styles.btnplus}>
                        <Text style={styles.textbtnplus}>+</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          </View>
        </ScrollView>

        <View style={styles.wrapbottom}>
          <View style={styles.wrappesanan}>
            <Text style={styles.textinfoa1}>Total pesanan</Text>
            <Text style={styles.textprice1}>Rp {total}</Text>

            {/* state salah */}
            <Text style={styles.texttiny1}>(0 malam, 0 kamar)</Text>
          </View>
          <View style={styles.wrapbutton1}>
            {this.props.login.data.auth && (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('OrderProcess', {
                    date: this.state.date,
                    duration: duration,
                    total: total,
                  })
                }>
                <View style={styles.button1}>
                  <Text style={styles.textbuttonpilih}>Lanjutkan</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  }
}

const BedroomDetail = withNavigation(BedroomDetailOriginal);
const mapStateToProps = state => {
  return {
    detailhotel: state.detailhotel,
    login: state.login,
  };
};

export default connect(mapStateToProps)(BedroomDetail);
