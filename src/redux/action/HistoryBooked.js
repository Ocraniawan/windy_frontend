import axios from 'axios';

import {APP_URL} from '../../config/config';

const url = APP_URL.concat('hotel_booking/booked');
export const getHistoryBooked = id => {
  return {
    type: 'GET_HISTORY_BOOKED',
    payload: axios.get(`${url}/${id}`),
  };
};
