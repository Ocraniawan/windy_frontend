import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Right} from 'native-base';
import {withNavigation} from 'react-navigation';
import {Tab, Tabs, Container} from 'native-base';
import CheapestFlights from './CheapestFlights';

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: '#ECF0F1'},
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
  headera: {
    flexDirection: 'row',
    height: 48,
    paddingLeft: 60,
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
    marginTop: 25,
    flexDirection: 'row',
  },
  texttiny: {
    color: '#808B8D',
    fontFamily: 'MuseoSansRounded500',
    fontSize: 12,
  },
  texttinya: {
    color: '#fff',
    fontFamily: 'MuseoSansRounded300',
    fontSize: 12,
  },
  btncat: {
    height: 35,
    borderRadius: 50,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  textcat: {fontFamily: 'MuseoSansRounded500', color: '#fff', fontSize: 14},
  content: {marginBottom: 100},
  cardpromo: {
    height: 90,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  imgcardpromo: {height: 70, width: '100%', borderRadius: 4},
  carditem: {backgroundColor: '#fff', marginTop: 10, padding: 15},
  wrappoint: {flexDirection: 'row'},
  image: {height: 85, width: 92, marginRight: 10},
  listtext: {flexDirection: 'row'},
  nameairy: {
    fontFamily: 'MuseoSansRounded500',
    fontSize: 12,
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
  wrapinfo: {
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FBE9D5',
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 2,
  },
  textinfo: {
    fontFamily: 'MuseoSansRounded500',
    fontSize: 12,
    paddingVertical: 5,
    color: '#EFA252',
  },
  wrapiconsearch: {
    height: 25,
    width: 25,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  iconsearch: {height: 17, width: 17},
  wrapbuttonlanding: {
    alignItems: 'center',
    marginHorizontal: 45,
    position: 'relative',
  },
  buttonlanding: {
    height: 47,
    width: '100%',
    backgroundColor: '#fff',
    elevation: 1,
    justifyContent: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    top: -70,
    position: 'absolute',
  },
  wrapicofilter: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 40,
  },
  iconfilter: {
    height: 13,
    width: 13,
    alignItems: 'center',
    marginRight: 10,
  },
  textbuttonlanding: {
    textAlign: 'center',
    fontFamily: 'MuseoSansRounded500',
    fontSize: 11,
  },
  wrapiconmap: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconmap: {
    height: 13,
    width: 13,
    alignItems: 'center',
    marginRight: 10,
  },
  tabs: {
    borderBottomWidth: 2,
    borderBottomColor: '#42a1ef',
  },
  tabstyle: {backgroundColor: '#ebebeb'},
  textstyle: {
    color: '#b9b4b4',
    fontSize: 12,
    fontFamily: 'MuseoSansRounded500',
  },
  activetabstyle: {backgroundColor: '#fff', color: 'yellow'},
  activetextstyle: {
    color: '#000',
    fontSize: 12,
    fontFamily: 'MuseoSansRounded500',
  },
});

class ListFlightOriginal extends Component {
  render() {
    return (
      <>
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
                <Text style={styles.textheader}>Penerbangan Pergi</Text>
                <Text style={styles.texttinya}>22 Jan 2020, 1 Orang</Text>
              </View>
              <Right>
                <TouchableOpacity>
                  <View style={styles.wrapiconsearch}>
                    <Image
                      source={require('../../assets/search.png')}
                      style={styles.iconsearch}
                    />
                  </View>
                </TouchableOpacity>
              </Right>
            </View>
          </LinearGradient>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1.5, y: 0}}
            colors={['#007EEF', '#40C2F2']}>
            <View style={styles.headera}>
              <View style={styles.btncat}>
                <Text style={styles.textcat}>JKTA</Text>
              </View>
              <View style={styles.btncat}>
                <Text style={styles.textcat}>--------></Text>
              </View>
              <View style={styles.btncat}>
                <Text style={styles.textcat}>JOG</Text>
              </View>
            </View>
          </LinearGradient>
          <Container>
            <Tabs tabBarUnderlineStyle={styles.tabs}>
              <Tab
                heading="TERMURAH"
                tabStyle={styles.tabstyle}
                textStyle={styles.textstyle}
                activeTabStyle={styles.activetabstyle}
                activeTextStyle={styles.activetextstyle}>
                <CheapestFlights />
              </Tab>
              <Tab
                heading="PALING AWAL"
                tabStyle={styles.tabstyle}
                textStyle={styles.textstyle}
                activeTabStyle={styles.activetabstyle}
                activeTextStyle={styles.activetextstyle}>
                <CheapestFlights />
              </Tab>
              <Tab
                heading="PALING AKHIR"
                tabStyle={styles.tabstyle}
                textStyle={styles.textstyle}
                activeTabStyle={styles.activetabstyle}
                activeTextStyle={styles.activetextstyle}>
                <CheapestFlights />
              </Tab>
            </Tabs>
          </Container>
        </View>

        <View style={styles.wrapbuttonlanding}>
          <View style={styles.buttonlanding}>
            <TouchableOpacity>
              <View style={styles.wrapicofilter}>
                <Image
                  source={require('../../assets/filter.png')}
                  style={styles.iconfilter}
                />
                <Text style={styles.textbuttonlanding}>Filter & Sort</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.wrapiconmap}>
                <Text style={styles.textbuttonlanding}>Ubah Tanggal</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

const ListFlight = withNavigation(ListFlightOriginal);
export default ListFlight;
