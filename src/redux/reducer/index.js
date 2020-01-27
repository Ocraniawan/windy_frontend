import {combineReducers} from 'redux';

import hotel from './Hotel';
import detailhotel from './Detailhotel';
import hotelcheckout from './Hotelcheckout';
import login from './Login';
import Register from './Register';
import guest from './Hotelguestinfo';
import detailuser from './Detailhotel';
import edituser from './Edithotel';
import detailbalance from './Detailbalance';
import topupbalance from './Topupbalance';
import historybooked from './HistoryBooked';

const appReducer = combineReducers({
  hotel,
  detailhotel,
  hotelcheckout,
  login,
  Register,
  guest,
  detailuser,
  edituser,
  detailbalance,
  topupbalance,
  historybooked,
});

export default appReducer;
