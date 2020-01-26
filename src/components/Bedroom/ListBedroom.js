import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView} from 'react-native-gesture-handler';
import {Right, Spinner} from 'native-base';
import {withNavigation} from 'react-navigation';
import {Tab, Tabs, Container} from 'native-base';
import {connect} from 'react-redux';

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
    paddingLeft: 0,
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
    borderWidth: 1,
    borderRadius: 50,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
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
  carditem: {
    backgroundColor: '#fff',
    marginTop: 10,
    padding: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  wrappoint: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  image: {height: 85, width: 92, marginRight: 10},
  listtext: {flexDirection: 'row'},
  nameairy: {
    fontFamily: 'MuseoSansRounded500',
    fontSize: 12,
    paddingVertical: 5,
    color: '#676767',
    width: 150,
  },
  textloc: {
    fontFamily: 'MuseoSansRounded500',
    fontSize: 10,
    paddingVertical: 3,
    color: '#879293',
    width: 250,
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
    backgroundColor: '#000',
  },
  buttonlanding: {
    height: 47,
    width: '100%',
    backgroundColor: '#ECF0F1',
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
    marginBottom: 50,
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

class ListBedroomOriginal extends Component {
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
                <Text style={styles.textheader}>Bogor</Text>
                <Text style={styles.texttinya}>
                  Check-in: Rabu, 22 Jan 2020, 1 Malam
                </Text>
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
          <View style={styles.cardpromo}>
            <Image
              source={require('../../assets/cardpromo.jpeg')}
              style={styles.imgcardpromo}
            />
          </View>

          {/* CONTENT */}

          <Container>
            <Tabs tabBarUnderlineStyle={styles.tabs}>
              <Tab
                heading="HARGA TERENDAH"
                tabStyle={styles.tabstyle}
                textStyle={styles.textstyle}
                activeTabStyle={styles.activetabstyle}
                activeTextStyle={styles.activetextstyle}>
                <View style={styles.content}>
                  <ScrollView>
                    {/* LIST HOTEL */}
                    {!this.props.hotel.isLoading &&
                      this.props.hotel.data.map((v, i) => (
                        <TouchableOpacity
                          key={i}
                          onPress={() => {
                            this.props.navigation.navigate('BedroomDetail', {
                              id_hotel: v.id_hotel,
                            });
                          }}>
                          <View style={styles.carditem}>
                            <View style={styles.wrappoint}>
                              <Image
                                source={require('../../assets/kamar.jpeg')}
                                style={styles.image}
                              />
                              <View styles={styles.listtext}>
                                <Text style={styles.nameairy}>{v.name}</Text>
                                <Text style={styles.textloc}>{v.address}</Text>
                                <View style={styles.wraptextulasan}>
                                  {/* <View style={styles.btnrating}>
                                    <Text style={styles.textrating}>
                                      8.3/10
                                    </Text>
                                  </View> */}
                                  <Text style={styles.textulasan}>
                                    (635 ulasan)
                                  </Text>
                                </View>
                                {/* <Text style={styles.texttinyprice}>
                                  Harga mulai dari {this.rupiah('435900')}
                                </Text> */}
                                <Text style={styles.textprice}>
                                  {this.rupiah(v.price)}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </TouchableOpacity>
                      ))}
                    {this.props.hotel.isLoading && (
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate('BedroomDetail')
                        }>
                        <View style={styles.carditem}>
                          <View style={styles.wrappoint}>
                            <Spinner color="blue" />
                          </View>
                        </View>
                      </TouchableOpacity>
                    )}
                    {/* END LIST HOTEL */}
                  </ScrollView>
                </View>
              </Tab>
              <Tab
                heading="HARGA TERBAIK"
                tabStyle={styles.tabstyle}
                textStyle={styles.textstyle}
                activeTabStyle={styles.activetabstyle}
                activeTextStyle={styles.activetextstyle}>
                <View style={styles.content}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('BedroomDetail')
                    }>
                    <View style={styles.carditem}>
                      <View style={styles.wrappoint}>
                        <Image
                          source={require('../../assets/kamar.jpeg')}
                          style={styles.image}
                        />
                        <View styles={styles.listtext}>
                          <Text style={styles.nameairy}>
                            Airy Baranangsiang Riau 39 Bogor
                          </Text>
                          <Text style={styles.textloc}>Bogor Timur</Text>
                          <View style={styles.wraptextulasan}>
                            <View style={styles.btnrating}>
                              <Text style={styles.textrating}>8.3/10</Text>
                            </View>
                            <Text style={styles.textulasan}>(635 ulasan)</Text>
                          </View>
                          <Text style={styles.texttinyprice}>
                            Harga mulai dari Rp. 435.900
                          </Text>
                          <Text style={styles.textprice}>Rp 235.386</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
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
                <Image
                  source={require('../../assets/map-pin.png')}
                  style={styles.iconmap}
                />

                <Text style={styles.textbuttonlanding}>Map View</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

const ListBedroom = withNavigation(ListBedroomOriginal);
const mapStateToProps = state => {
  return {
    hotel: state.hotel,
  };
};

export default connect(mapStateToProps)(ListBedroom);
