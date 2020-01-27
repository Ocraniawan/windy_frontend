import axios from 'axios';

import {APP_URL} from '../../config/config';

const url = APP_URL.concat('hotel_booking/not_booked');
export const getHistoryNotBooked = id => {
  return {
    type: 'GET_HISTORY_NOTBOOKED',
    payload: axios.get(`${url}/${id}`),
  };
};
