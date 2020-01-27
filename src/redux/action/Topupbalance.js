import axios from 'axios';

import {APP_URL} from '../../config/config';

const url = APP_URL.concat('balance');

export const topupBalance = id => {
  return {
    type: 'PUT_TOPUPBALANCE',
    payload: axios.put(`${url}/${id}`),
  };
};
