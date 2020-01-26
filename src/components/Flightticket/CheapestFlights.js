import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {withNavigation} from 'react-navigation';

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: '#fff'},
  wrapper: {flexDirection: 'row', paddingLeft: 13, paddingTop: 15},
  awrapper: {marginTop: 20},
  wrapicon: {marginRight: 10},
  icon: {height: 34, width: 34},
  wraptext: {
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: '#EDEFF1',
    width: '100%',
  },
  wraptext1: {
    width: 270,
  },
  tinytext: {
    fontSize: 12,
    color: '#A0A8AA',
    marginBottom: 5,
    fontFamily: 'MuseoSansRounded500',
  },
  text: {
    fontSize: 16,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    fontFamily: 'MuseoSansRounded500',
  },
  wrapcout: {flexDirection: 'row', alignItems: 'flex-end'},
  textcout: {
    color: '#5F5F5F',
    fontSize: 13,
    marginLeft: 12,
    paddingBottom: 2,
    fontFamily: 'MuseoSansRounded500',
  },
  textcout1: {
    color: '#5F5F5F',
    fontSize: 13,
    marginLeft: 0,
    paddingBottom: 2,
    fontFamily: 'MuseoSansRounded500',
  },
  wrappointer: {
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEFF1',
    width: '100%',
  },
  wrapiconpoint: {width: 40},
  iconpoint: {height: 40, width: 40},
  button: {
    height: 46,
    width: 345,
    borderRadius: 45,
    backgroundColor: '#FFCA00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapfooter: {alignItems: 'center', marginTop: 22},
  textbutton: {
    fontSize: 16,
    fontFamily: 'MuseoSansRounded700',
  },
  wrapinfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  wrapiconlike: {height: 300, backgroundColor: '#fff'},
  iconlike: {height: 160, width: '100%'},
  content: {marginBottom: 100},
  carditem: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
    marginTop: 10,
    padding: 15,
  },
  wrappoint: {flexDirection: 'row'},
  image: {height: 85, width: 92, marginRight: 10},
  listtext: {flexDirection: 'row'},
  nameairy: {
    fontFamily: 'MuseoSansRounded500',
    fontSize: 18,
    paddingVertical: 5,
    color: '#676767',
  },
  textloc: {
    fontFamily: 'MuseoSansRounded500',
    fontSize: 10,
    paddingVertical: 3,
    color: '#879293',
  },
  wraptextulasan: {flexDirection: 'row', marginTop: 2},
  btnrating: {
    backgroundColor: '#0180D1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    borderRadius: 3,
    elevation: 1,
    marginRight: 5,
  },
  textrating: {
    fontFamily: 'MuseoSansRounded700',
    fontSize: 12,
    paddingHorizontal: 0,
    color: '#fff',
  },
  textulasan: {
    fontFamily: 'MuseoSansRounded300',
    fontSize: 10,
    paddingVertical: 2.5,
    color: '#9BA3A5',
  },
  texttinyprice: {
    fontFamily: 'MuseoSansRounded300',
    fontSize: 11,
    paddingTop: 15,
    color: '#9BA3A5',
  },
  textprice: {
    fontFamily: 'MuseoSansRounded700',
    fontSize: 16,
    paddingVertical: 5,
    color: '#606060',
  },
  textinfo: {
    fontFamily: 'MuseoSansRounded500',
    fontSize: 12,
    paddingVertical: 5,
    color: '#EFA252',
  },
  wrapcard: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 10,
    height: 150,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  wraptext2: {flex: 1, marginLeft: 20},
  textflight: {flex: 1, fontSize: 16},
  textgrey: {flex: 1, fontSize: 12, color: '#808B8D'},
  wrapright: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textprice1: {
    flex: 1,
    fontSize: 12,
    textDecorationLine: 'line-through',
  },
  wrapbtn: {
    backgroundColor: '#FFCA00',
    padding: 10,
    borderRadius: 50,
  },
  textblue: {flex: 1, fontSize: 13, color: '#0180D1'},
});

class CheapestFlightsOriginal extends Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <View style={styles.content}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Orderflight')}>
              <View style={styles.wrapcard}>
                <View style={styles.wraptext2}>
                  <Text style={styles.textflight}>Lion Air</Text>
                  <Text style={styles.textgrey}>19.50 CGK</Text>
                  <Text style={styles.textgrey}>21.00 JOG</Text>
                </View>
                <View style={styles.wrapright}>
                  <Text style={styles.textgrey}>Harga perorang</Text>
                  <Text style={styles.textprice1}>Rp 406.634</Text>
                  <View style={styles.wrapbtn}>
                    <Text>Rp 396.000</Text>
                  </View>
                  <Text style={styles.textblue}>LIHAT DETAIL</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const CheapestFlights = withNavigation(CheapestFlightsOriginal);
export default CheapestFlights;
