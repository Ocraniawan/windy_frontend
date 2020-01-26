import React, {Component} from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: '#fff'},
  card: {
    backgroundColor: '#fff',
    height: 250,
    margin: 20,
    borderRadius: 5,
    elevation: 1,
  },
  wraptop: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderColor: '#eee',
  },
  wraptexttop: {
    fontFamily: 'MuseoSansRounded700',
    fontSize: 16,
    color: '#808B8D',
    marginTop: 3,
  },
  wrapmid: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderColor: '#eee',
    height: 100,
  },
  wraptextmid: {
    fontFamily: 'MuseoSansRounded500',
    color: '#427E03',
    fontSize: 20,
  },
  wrapbot: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderColor: '#eee',
    height: 100,
  },
  wrapimg: {width: 70, height: 40},
});

class DetailBalanceOriginal extends Component {
  rupiah(angka) {
    var rupiah = '';
    var angkarev = angka
      .toString()
      .split('')
      .reverse()
      .join('');
    for (var i = 0; i < angkarev.length; i++) {
      if (i % 3 === 0) {
        rupiah += angkarev.substr(i, 3) + '.';
      }
    }
    return (
      'Rp.' +
      rupiah
        .split('', rupiah.length - 1)
        .reverse()
        .join('')
    );
  }
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.card}>
          <View style={styles.wraptop}>
            <Text style={styles.wraptexttop}>Your Balance</Text>
          </View>
          <View style={styles.wrapmid}>
            <Text style={styles.wraptextmid}>{this.rupiah('700000')}</Text>
          </View>
          <View style={styles.wrapbot}>
            <ImageBackground
              source={require('../../assets/logoairy.png')}
              style={styles.wrapimg}
            />
          </View>
        </View>
      </View>
    );
  }
}

const DetailBalance = withNavigation(DetailBalanceOriginal);
export default DetailBalance;
