import axios from 'axios';

import {APP_URL} from '../../config/config';

const url = APP_URL.concat('hotel_booking/checkout');

export const hotelcheckout = id => {
  return {
    type: 'PUT_HOTECHECKOUT',
    payload: axios.put(`${url}/${id}`),
  };
};
