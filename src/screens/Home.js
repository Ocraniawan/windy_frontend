import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import Carousel from 'react-native-banner-carousel';
import {Tab, Tabs, Container} from 'native-base';
import Bedroom from '../components/Bedroom';
import Flightticket from '../components/Flightticket';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  root: {flex: 1, backgroundColor: '#fff'},
  wrapcarousel: {height: 222},
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
});

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 222;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerImage: [
        require('../assets/banner1.png'),
        require('.../assets/banner2.png'),
        require('.../assets/banner3.png'),
        require('.../assets/banner4.jpg'),
        require('.../assets/banner5.jpg'),
        require('.../assets/banner6.jpg'),
        require('.../assets/banner7.jpg'),
        require('.../assets/banner8.jpg'),
        require('.../assets/banner9.jpg'),
      ],
    };
  }

  renderPage(image, index) {
    return (
      <View key={index}>
        <Image
          style={{width: BannerWidth, height: BannerHeight}}
          source={image}
        />
      </View>
    );
  }
  render() {
    return (
      <>
        <View style={styles.root}>
          <View style={styles.wrapcarousel}>
            <Carousel
              autoplay
              autoplayTimeout={5000}
              loop
              index={0}
              showsPageIndicator={false}
              pageSize={BannerWidth}>
              {this.state.bannerImage.map((image, index) =>
                this.renderPage(image, index),
              )}
            </Carousel>
            <View style={styles.wraptexttitle}>
              <View style={styles.clean} />
              <View style={styles.wraptextcount}>
                <View style={styles.wrapnumbertext}>
                  <Text style={styles.number}> 1/9 </Text>
                </View>
                <View style={styles.wraptextpromo}>
                  <Text style={styles.textpromo}>Lihat Semua Promo</Text>
                </View>
              </View>
            </View>
          </View>

          <Container>
            <Tabs tabBarUnderlineStyle={styles.tabs}>
              <Tab
                heading="Kamar"
                tabStyle={styles.tabstyle}
                textStyle={styles.textstyle}
                activeTabStyle={styles.activetabstyle}
                activeTextStyle={styles.activetextstyle}>
                <Bedroom />
              </Tab>
              <Tab
                heading="Tiket Pesawat"
                tabStyle={styles.tabstyle}
                textStyle={styles.textstyle}
                activeTabStyle={styles.activetabstyle}
                activeTextStyle={styles.activetextstyle}>
                <Flightticket />
              </Tab>
            </Tabs>
          </Container>
        </View>
      </>
    );
  }
}

export default Home;
