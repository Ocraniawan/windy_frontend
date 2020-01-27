import axios from 'axios';

import {APP_URL} from '../../config/config';

const url = APP_URL.concat('user');

export const getUser = (user_id, token) => {
  const headers = {Authorization: `Bearer ${token}`};
  return {
    type: 'GET_USER',
    payload: axios.get(`${url}/${user_id}`, {headers: headers}),
  };
};
