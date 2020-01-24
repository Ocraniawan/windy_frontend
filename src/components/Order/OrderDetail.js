import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView} from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: '#EBEBEB'},
  textheader: {
    fontFamily: 'MuseoSansRounded500',
    color: '#fff',
    fontSize: 16,
    paddingLeft: 16,
  },
  textheader1: {
    fontFamily: 'MuseoSansRounded300',
    color: '#fff',
    fontSize: 11,
    paddingLeft: 16,
  },
  header: {
    flexDirection: 'row',
    height: 55,
    paddingLeft: 15,
    alignItems: 'center',
  },
  header1: {
    flexDirection: 'row',
    paddingLeft: 0,
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
  textbutton: {
    fontFamily: 'MuseoSansRounded700',
    color: '#000',
    fontSize: 16,
    marginTop: 3,
  },
  wraplist: {flexDirection: 'row', marginTop: 15, marginBottom: 15},
  text: {
    flex: 1,
    marginLeft: 15,
    fontFamily: 'MuseoSansRounded300',
    fontSize: 16,
  },
  textcheckout: {
    flex: 1,
    marginLeft: 30,
    fontFamily: 'MuseoSansRounded300',
    fontSize: 11.5,
    color: '#9BA3A4',
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 5,
  },
  card1: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    borderRadius: 5,
    elevation: 1,
    marginBottom: 10,
  },

  wraptopcard: {paddingHorizontal: 20, paddingVertical: 10},
  texttopcard: {
    fontFamily: 'MuseoSansRounded300',
    paddingHorizontal: 10,
    paddingVertical: 3,
    fontSize: 12,
  },
  texttopcard1: {
    fontFamily: 'MuseoSansRounded300',
    paddingHorizontal: 10,
    paddingVertical: 3,
    fontSize: 12,
    color: '#BABABA',
  },

  wrapcentercard: {
    borderBottomWidth: 1,
    borderBottomColor: '#ECF0F1',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {fontFamily: 'MuseoSansRounded500'},
  textdate: {fontFamily: 'MuseoSansRounded300'},
  wrapprice: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  textleft: {
    flex: 1,
    alignItems: 'center',
    fontFamily: 'MuseoSansRounded700',
    fontSize: 12,
  },
  textright: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'right',
    fontFamily: 'MuseoSansRounded700',
    fontSize: 12,
  },
  cardtop: {
    borderWidth: 1,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 5,
    borderColor: '#ECF0F1',
  },
  textleft1: {
    fontFamily: 'MuseoSansRounded300',
    fontSize: 12,
    flex: 1,
  },
  textprice: {
    fontFamily: 'MuseoSansRounded300',
    fontSize: 12,
    textAlign: 'right',
    flex: 1,
  },
  wrapcard: {
    fontFamily: 'MuseoSansRounded300',
    fontSize: 16,
    textAlign: 'right',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
  textfree: {
    fontFamily: 'MuseoSansRounded700',
    color: '#427E03',
    fontSize: 12,
    textAlign: 'right',
    flex: 1,
  },
  flexfree: {flexDirection: 'row'},
  paddingtitle: {padding: 20},
  fonttitle: {
    fontFamily: 'MuseoSansRounded500',
    color: '#787878',
    fontSize: 12,
  },
  wrapcard2: {borderRadius: 5, borderColor: '#ECF0F1'},
  flex: {flex: 1},
  fonttitle1: {
    fontFamily: 'MuseoSansRounded300',
    fontSize: 12,
  },
  fontinfo: {
    fontFamily: 'MuseoSansRounded300',
    fontSize: 10,
  },
  fontblue: {
    fontFamily: 'MuseoSansRounded700',
    color: '#00AEEF',
    fontSize: 12,
    textAlign: 'right',
    flex: 1,
  },
  fontname: {
    fontFamily: 'MuseoSansRounded300',
    fontSize: 12,
    paddingVertical: 2,
  },
  fontnumberphone: {
    fontFamily: 'MuseoSansRounded100',
    fontSize: 12,
    paddingVertical: 2,
  },
  fontemail: {
    fontFamily: 'MuseoSansRounded100',
    fontSize: 12,
    paddingVertical: 2,
  },
  wrapbottom: {backgroundColor: '#fff'},
  boxinfoblue: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#00AEEF',
    borderRadius: 5,
    flex: 1,
    backgroundColor: '#D0F3FF',
  },
  textinfoblue: {
    padding: 17,
    fontFamily: 'MuseoSansRounded300',
    color: '#000',
    fontSize: 12,
  },
});

class OrderDetailOriginal extends Component {
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
              <Text style={styles.textheader}>Detail Pesanan</Text>
              <Text style={styles.textheader1}>ID Pesanan: 99999999999</Text>
            </View>
          </View>
        </LinearGradient>
        <ScrollView>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1.5, y: 0}}
            colors={['#007EEF', '#40C2F2']}>
            <View style={styles.header1}>
              <View style={styles.card}>
                <View style={styles.wraptopcard}>
                  <Text style={styles.texttopcard}>
                    Pemesanan ini telah kadaluwarsa.
                  </Text>
                  <Text style={styles.texttopcard1}>22 Januari 2020</Text>
                </View>
                <View style={styles.cardtop}>
                  <View style={styles.wrapcentercard}>
                    <View style={styles.wrapcard}>
                      <Text style={styles.textleft1}>Total Transaksi</Text>
                      <Text style={styles.textprice}>Rp 738800</Text>
                    </View>
                    <View style={styles.flexfree}>
                      <Text style={styles.textleft1}>Biaya Layanan</Text>
                      <Text style={styles.textfree}>Gratis</Text>
                    </View>
                  </View>
                  <View style={styles.wrapprice}>
                    <Text style={styles.textleft}>Total Pembayaran</Text>
                    <Text style={styles.textright}>Rp 233.064</Text>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>

          <View style={styles.paddingtitle}>
            <Text style={styles.fonttitle}>Rincian Produk</Text>
          </View>
          <View style={styles.card1}>
            <View style={styles.wrapcard1}>
              <View style={styles.wrapcentercard}>
                <View style={styles.wrapcard}>
                  <View style={styles.flex}>
                    <Text style={styles.fonttitle1}>Lion Air (CGK - DPS)</Text>
                    <Text style={styles.fontinfo}>Waktu Pembayaran Habis</Text>
                  </View>
                  <TouchableOpacity>
                    <Text style={styles.fontblue}>RINCIAN</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.wrapprice}>
                <Text style={styles.textleft}>Subtotal</Text>
                <Text style={styles.textright}>Rp 233.064</Text>
              </View>
            </View>
          </View>

          <View style={styles.paddingtitle}>
            <Text style={styles.fonttitle}>Kontak Pemesanan</Text>
          </View>
          <View style={styles.card1}>
            <View style={styles.wrapcard1}>
              <View style={styles.wrapcentercard}>
                <View style={styles.wrapcard}>
                  <View style={styles.flex}>
                    <Text style={styles.fontname}>Tn. Amudia Kalpa Taruna</Text>
                    <Text style={styles.fontnumberphone}>+6289623201606</Text>
                    <Text style={styles.fontemail}>
                      amudia.ktaruna@gmail.com
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.wrapbottom}>
            <View style={styles.paddingtitle}>
              <Text style={styles.fonttitle}>BUTUH BANTUAN?</Text>
            </View>
            <View style={styles.boxinfoblue}>
              <Text style={styles.textinfoblue}>
                Hubungi Customer Care Airy apabila terjadi kendala Pembayaran
                dan voucher/tiket tidak terbit dalam 30 menit
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const OrderDetail = withNavigation(OrderDetailOriginal);
export default OrderDetail;
