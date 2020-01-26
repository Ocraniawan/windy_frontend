import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Form, Item, Input, Label} from 'native-base';
import {withNavigation} from 'react-navigation';
const styles = StyleSheet.create({
  lableinput: {
    fontSize: 15,
    fontFamily: 'MuseoSansRounded500',
    color: '#000',
  },
  root: {flex: 1, backgroundColor: '#fff'},
  card: {
    backgroundColor: '#fff',
    height: 200,
    margin: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ebebeb',
    elevation: 1,
  },
  wraptexttitle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  title: {
    fontFamily: 'MuseoSansRounded700',
    fontSize: 16,
    color: '#808B8D',
    marginTop: 3,
  },
  wrapbtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  wraptextbtn: {
    backgroundColor: '#FFCA00',
    height: 46,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  texttbn: {
    fontFamily: 'MuseoSansRounded700',
    fontSize: 16,
    color: '#000',
    marginTop: 3,
  },
});

class TopupBalanceOriginal extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.card}>
          <View style={styles.wraptexttitle}>
            <Text style={styles.title}>Top-up Your Balance</Text>
          </View>
          <View style={styles.wrapinput}>
            <Form>
              <Item>
                <Label style={styles.lableinput} />
                <Input
                  keyboardType="number-pad"
                  placeholder="Input balance"
                  style={styles.lableinput}
                />
              </Item>
            </Form>
          </View>
          <View style={styles.wrapbtn}>
            <TouchableOpacity>
              <View style={styles.wraptextbtn}>
                <Text style={styles.texttbn}>SUBMIT</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const TopupBalance = withNavigation(TopupBalanceOriginal);
export default TopupBalance;
