import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import Carousel from 'react-native-banner-carousel';
import {Tab, Tabs, Left} from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 222;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerImage: [
        require('./src/assets/banner1.png'),
        require('./src/assets/banner2.png'),
        require('./src/assets/banner3.png'),
        require('./src/assets/banner4.jpg'),
        require('./src/assets/banner5.jpg'),
        require('./src/assets/banner6.jpg'),
        require('./src/assets/banner7.jpg'),
        require('./src/assets/banner8.jpg'),
        require('./src/assets/banner9.jpg'),
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
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{height: 222}}>
          <View style={styles.container}>
            <Carousel
              autoplay
              autoplayTimeout={5000}
              loop
              index={0}
              showsPageIndicator = {false}
              pageSize={BannerWidth}>
              {this.state.bannerImage.map((image, index) =>
                this.renderPage(image, index),
              )}
            </Carousel>
            <View style={{flexDirection: 'row', position:'absolute', top:188}}>
              <View style={{flex: 1}} />
              <View
                style={{flexDirection: 'row', marginBottom: 5, marginRight: 7}}>
                <View
                  style={{
                    flex: 0,
                    backgroundColor: '#0000008c',
                    padding: 5,
                    height: 29,
                    borderTopLeftRadius: 4,
                    borderBottomLeftRadius: 4,
                    marginRight: 1,
                  }}>
                  <Text style={{color: '#fff', fontSize: 12}}> 1/9 </Text>
                </View>
                <View
                  style={{
                    flex: 0,
                    backgroundColor: '#0000008c',
                    padding: 5,
                    height: 29,
                    borderTopRightRadius: 4,
                    borderBottomRightRadius: 4,
                  }}>
                  <Text style={{color: '#fff', fontSize: 12}}>
                    {' '}
                    Lihat Semua Promo{' '}
                  </Text>
                </View>
              </View>
            </View>
     
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: '#fff', flexDirection: 'row'}}>
          <Tabs
            tabBarUnderlineStyle={{
              borderBottomWidth: 2,
              borderBottomColor: '#42a1ef',
            }}>
            <Tab
              heading="Kamar"
              tabStyle={{backgroundColor: '#fff'}}
              textStyle={{color: '#b9b4b4'}}
              activeTabStyle={{backgroundColor: '#fff', color: 'yellow'}}
              activeTextStyle={{color: '#000', fontWeight: 'normal'}}>
              <Text>test1</Text>
            </Tab>
            <Tab
              heading="Tiket Pesawat"
              tabStyle={{backgroundColor: '#fff'}}
              textStyle={{color: '#b9b4b4'}}
              activeTabStyle={{backgroundColor: '#fff', color: 'yellow'}}
              activeTextStyle={{color: '#000', fontWeight: 'normal'}}>
              <Text>test1</Text>
            </Tab>
          </Tabs>
          <View />
        </View>
      </View>
    );
  }
}
