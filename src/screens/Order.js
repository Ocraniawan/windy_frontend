import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: '#EBEBEB'},
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
  header: {height: 50, justifyContent: 'center', paddingLeft: 15},
  banner: {
    height: 150,
    paddingHorizontal: 10,
    paddingTop: 15,
    flexDirection: 'row',
  },
  wraptextbanner: {
    height: 120,
    elevation: 1,
    backgroundColor: '#40C2F2',
    borderRadius: 5,
    marginRight: 10,
    justifyContent: 'center',
    paddingHorizontal: 20,
    flex: 1,
  },
  textbanner: {
    fontFamily: 'MuseoSansRounded500',
    fontSize: 11,
    color: '#fff',
  },
  textbanner1: {
    fontFamily: 'MuseoSansRounded500',
    fontSize: 11,
    color: '#fff',
    textDecorationLine: 'underline',
  },
  wraptextbanner1: {
    height: 120,
    elevation: 1,
    width: 110,
    backgroundColor: '#40C2F2',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 5,
    elevation: 1,
  },
  wraptopcard: {paddingHorizontal: 20, paddingVertical: 20},
  texttopcard: {
    fontFamily: 'MuseoSansRounded500',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 3,
    width: 149,
    borderRadius: 5,
    borderColor: '#1DAADF',
    color: '#1DAADF',
    fontSize: 10,
  },
  wrapcentercard: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: '#ECF0F1',
    borderTopColor: '#ECF0F1',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {fontFamily: 'MuseoSansRounded500', fontSize: 11},
  textdate: {fontFamily: 'MuseoSansRounded300', fontSize: 11, paddingTop: 5},
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
  wrapbtndetail: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  textbtndetail: {
    fontFamily: 'MuseoSansRounded700',
    fontSize: 11.5,
    color: '#1DAADF',
  },
});
export default class Order extends Component {
  render() {
    return (
      <View style={styles.root}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1.5, y: 0}}
          colors={['#007EEF', '#40C2F2']}>
          <View style={styles.header}>
            <Text style={styles.textheader}>Pesanan Saya</Text>
          </View>
        </LinearGradient>
        <ScrollView showsVerticalScrollIndicator={false}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1.5, y: 0}}
            colors={['#007EEF', '#40C2F2']}>
            <View style={styles.banner}>
              <View style={styles.wraptextbanner}>
                <Text style={styles.textbanner}>
                  Belum Ada Tiket dan Voucher Aktif
                </Text>
                <Text style={styles.textbanner}>
                  Tiket atau Voucher yang telah tebit akan ditampilkan di sini
                </Text>
              </View>

              <View style={styles.wraptextbanner1}>
                <TouchableOpacity>
                  <Text style={styles.textbanner1}>Lihat Semua</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>

          <View style={styles.card}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('OrderDetail')}>
              <View style={styles.wraptopcard}>
                <Text style={styles.texttopcard}>
                  Menunggu Metode Pembayaran
                </Text>
              </View>
              <View style={styles.wrapcentercard}>
                <Text style={styles.title}>
                  Airy Baranangsiang Riau 39 Bogor
                </Text>
                <Text style={styles.textdate}>
                  Selasa, 21 Jan 2020 - Rabu, 22 Jan 2020
                </Text>
              </View>
              <View style={styles.wrapprice}>
                <Text style={styles.textleft}>Total</Text>
                <Text style={styles.textright}>Rp 233.064</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ListReceipt')}>
            <View style={styles.wrapbtndetail}>
              <Text style={styles.textbtndetail}>LIHAT BUKTI PEMBELIAN</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
