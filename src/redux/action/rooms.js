import axios from 'axios';

import {APP_URL} from '../../config/config';

const url = APP_URL.concat('rooms');

export const gethotel = search => {
  return {
    type: 'GET_HOTEL',
    payload: axios.get(`${url}?search[address]=${search}`),
  };
};
