import axios from 'axios';

import {APP_URL} from '../../config/config';

const url = APP_URL.concat('balance');
export const detailBalance = id => {
  return {
    type: 'GET_DETAILBALANCE',
    payload: axios.get(`${url}/${id}`),
  };
};
