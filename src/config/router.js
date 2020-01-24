import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import Splash from '../screens/Splash';
import Home from '../screens/Home';
import SearchLoc from '../components/Bedroom/SearchLoc';
import ListDurasi from '../components/Bedroom/ListDurasi';
import BedroomDetail from '../components/Bedroom/BedroomDetail';
import ListBedroom from '../components/Bedroom/ListBedroom';
import Datepicker from '../components/Bedroom/Datepicker';

import Order from '../screens/Order';
import ListReceipt from '../components/Order/ListReceipt';
import OrderDetail from '../components/Order/OrderDetail';

import Menu from '../screens/Menu';
import Account from '../components/Account/Account';
import ChangePass from '../components/Account/ChangePass';
import MainLogin from '../screens/Login/MainLogin';
import Login from '../screens/Login/Login';
import Register from '../screens/Login/Register';
import ForgotPass from '../screens/Login/ForgotPass';

// const SplashNav = createStackNavigator(
//   {
//     Splash: {
//       screen: Splash,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },
//   },
//   {
//     initialRouteName: 'Splash',
//   },
// );

const AuthNav = createStackNavigator(
  {
    MainLogin: {
      screen: MainLogin,
      navigationOptions: {
        headerShown: false,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        headerShown: false,
      },
    },
    ForgotPass: {
      screen: ForgotPass,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
);

const HomeNav = createStackNavigator(
  {
    Cari: {
      screen: Home,
      navigationOptions: {
        headerShown: false,
      },
    },
    SearchLoc: {
      screen: SearchLoc,
      navigationOptions: {
        headerShown: false,
      },
    },
    ListDurasi: {
      screen: ListDurasi,
      navigationOptions: {
        headerShown: false,
      },
    },
    ListBedroom: {
      screen: ListBedroom,
      navigationOptions: {
        headerShown: false,
      },
    },
    BedroomDetail: {
      screen: BedroomDetail,
      navigationOptions: {
        headerShown: false,
      },
    },
    Datepicker: {
      screen: Datepicker,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Cari',
  },
);

HomeNav.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const OrderNav = createStackNavigator(
  {
    Pesanan: {
      screen: Order,
      navigationOptions: {
        headerShown: false,
      },
    },
    ListReceipt: {
      screen: ListReceipt,
      navigationOptions: {
        headerShown: false,
      },
    },
    OrderDetail: {
      screen: OrderDetail,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Pesanan',
  },
);

OrderNav.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const MenuNav = createStackNavigator(
  {
    Menu: {
      screen: Menu,
      navigationOptions: {
        headerShown: false,
      },
    },
    Account: {
      screen: Account,
      navigationOptions: {
        headerShown: false,
      },
    },
    MainLogin: {
      screen: MainLogin,
      navigationOptions: {
        headerShown: false,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        headerShown: false,
      },
    },
    ForgotPass: {
      screen: ForgotPass,
      navigationOptions: {
        headerShown: false,
      },
    },
    ChangePass: {
      screen: ChangePass,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Menu',
  },
);

MenuNav.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const BottomNav = createBottomTabNavigator(
  {
    Cari: {
      screen: HomeNav,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => {
          return <Icon name="magnify" size={30} color={tintColor} />;
        },
      },
    },
    Pesanan: {
      screen: OrderNav,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => {
          return <Icon name="database" size={30} color={tintColor} />;
        },
      },
    },
    Menu: {
      screen: MenuNav,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => {
          return <Icon name="menu" size={30} color={tintColor} />;
        },
      },
    },
  },
  {
    initialRouteName: 'Cari',
    tabBarOptions: {
      activeTintColor: '#00ADEF',
      activeBackgroundColor: 'white',
      inactiveTintColor: '#BABABA',
      labelStyle: {
        fontFamily: 'MuseoSansRounded500',
        fontSize: 12.5,
        paddingBottom: 5,
      },
      style: {
        backgroundColor: 'white',
        borderTopColor: 'transparent',
        marginBottom: 5,
        paddingTop: 10,
        height: 50,
      },
    },
  },
);

const SwitchNav = createSwitchNavigator(
  {AuthNav, BottomNav},
  {
    initialRouteName: 'BottomNav',
  },
);

const AppContainer = createAppContainer(SwitchNav);

class Router extends Component {
  render() {
    return <AppContainer />;
  }
}
export default Router;
