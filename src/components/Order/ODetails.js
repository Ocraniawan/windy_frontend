import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Container, Tabs, Tab} from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  root: {flex: 1, backgroundColor: '#fff'},
  wraptexttitle: {flexDirection: 'row', position: 'absolute', top: 188},
  clean: {flex: 1},
  wraptextcount: {flexDirection: 'row', marginBottom: 5, marginRight: 7},
  wrapnumbertext: {
    flex: 0,
    backgroundColor: '#0000008c',
    padding: 5,
    height: 29,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    marginRight: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {color: '#fff', fontSize: 12, fontFamily: 'MuseoSansRounded500'},
  wraptextpromo: {
    flex: 0,
    backgroundColor: '#0000008c',
    padding: 5,
    height: 29,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textpromo: {color: '#fff', fontSize: 12, fontFamily: 'MuseoSansRounded500'},
  wraptabs: {color: '#fff', fontSize: 12},
  tabs: {
    borderBottomWidth: 2,
    borderBottomColor: '#42a1ef',
  },
  tabstyle: {backgroundColor: '#fff'},
  textstyle: {color: '#b9b4b4', fontFamily: 'MuseoSansRounded500'},
  activetabstyle: {backgroundColor: '#fff', color: 'yellow'},
  activetextstyle: {color: '#000', fontFamily: 'MuseoSansRounded500'},
  textheader: {
    fontFamily: 'MuseoSansRounded500',
    color: '#fff',
    fontSize: 16,
    paddingLeft: 16,
  },
  textheader1: {
    fontFamily: 'MuseoSansRounded300',
    color: '#fff',
    fontSize: 16,
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
});

class ODetails extends Component {
  render() {
    return (
      <>
        <View style={styles.root}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1.5, y: 0}}
            colors={['#007EEF', '#40C2F2']}>
            <View style={styles.header}>
              <TouchableOpacity>
                <View style={styles.wraparrowico}>
                  <Image
                    source={require('../../assets/close.png')}
                    style={styles.arrowico}
                  />
                </View>
              </TouchableOpacity>
              <View>
                <Text style={styles.textheader}>Detail Pesanan</Text>
                <Text style={styles.textheader1}>?????????????????????</Text>
              </View>
            </View>
          </LinearGradient>
          <Container>
            <Tabs tabBarUnderlineStyle={styles.tabs}>
              <Tab
                heading="Rincian Pesanan"
                tabStyle={styles.tabstyle}
                textStyle={styles.textstyle}
                activeTabStyle={styles.activetabstyle}
                activeTextStyle={styles.activetextstyle}>
                <Text>test</Text>
              </Tab>
              <Tab
                heading="Rincian Harga"
                tabStyle={styles.tabstyle}
                textStyle={styles.textstyle}
                activeTabStyle={styles.activetabstyle}
                activeTextStyle={styles.activetextstyle}>
                <Text>test</Text>
              </Tab>
            </Tabs>
          </Container>
        </View>
      </>
    );
  }
}

export default ODetails;
