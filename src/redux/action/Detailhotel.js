import axios from 'axios';

import {APP_URL} from '../../config/config';

const url = APP_URL.concat('hotel');
export const detailHotel = id => {
  return {
    type: 'GET_DETAIL_HOTEL',
    payload: axios.get(`${url}/${id}`),
  };
};
