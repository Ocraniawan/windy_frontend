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
  root: {flex: 1, backgroundColor: '#EBEBEB'},
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
  card: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 5,
  },
  wraptopcard: {paddingHorizontal: 20, paddingVertical: 20},
  texttopcard: {
    fontFamily: 'MuseoSansRounded500',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 3,
    width: 180,
    borderRadius: 5,
    borderColor: '#1DAADF',
    color: '#1DAADF',
    fontSize: 12,
  },
  wrapcentercard: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: '#ECF0F1',
    borderTopColor: '#ECF0F1',
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
    fontSize: 14,
  },
  textright: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'right',
    fontFamily: 'MuseoSansRounded700',
    fontSize: 14,
  },
  wrapbtndetail: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
    marginTop: 20,
  },
  textbtndetail: {
    fontFamily: 'MuseoSansRounded700',
    fontSize: 12,
    color: '#1DAADF',
  },
});

class ListReceiptOriginal extends Component {
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
              <Text style={styles.textheader}>Bukti Pembelian</Text>
            </View>
          </View>
        </LinearGradient>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.card}>
            <View style={styles.wraptopcard}>
              <Text style={styles.texttopcard}>Menunggu Metode Pembayaran</Text>
            </View>
            <View style={styles.wrapcentercard}>
              <Text style={styles.title}>Airy Baranangsiang Riau 39 Bogor</Text>
              <Text style={styles.textdate}>
                Selasa, 21 Jan 2020 - Rabu, 22 Jan 2020
              </Text>
            </View>
            <View style={styles.wrapprice}>
              <Text style={styles.textleft}>Total</Text>
              <Text style={styles.textright}>Rp 233.064</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.wraptopcard}>
              <Text style={styles.texttopcard}>Menunggu Metode Pembayaran</Text>
            </View>
            <View style={styles.wrapcentercard}>
              <Text style={styles.title}>Lion Air (CGK - DPS)</Text>
              <Text style={styles.textdate}>Selasa, 21 Jan 2020</Text>
            </View>
            <View style={styles.wrapprice}>
              <Text style={styles.textleft}>Total</Text>
              <Text style={styles.textright}>Rp 233.064</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const ListReceipt = withNavigation(ListReceiptOriginal);
export default ListReceipt;
