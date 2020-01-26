import {combineReducers} from 'redux';

import hotel from './Hotel';
import detailhotel from './Detailhotel';
import login from './Login';
import Register from './Register';
// import detailriview from './Detailriviews';
// import detailrestaurant from './Detailrestaurant';
// import menurestaurant from './Menurestaurant';
// import restaurant from './Restaurant';
// import popularitem from './Pupularitem';
// import categories from './Categories';
// import login from './Login';

const appReducer = combineReducers({
  hotel,
  detailhotel,
  login,
  Register,
  //   restaurant,
  //   popularitem,
  //   categories,
  //   detailriview,
  //   detailrestaurant,
  //   menurestaurant,
  //   login,
});

export default appReducer;
