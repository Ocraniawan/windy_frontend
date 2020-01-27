import axios from 'axios';

import {APP_URL} from '../../config/config';

const url = APP_URL.concat('user');

export const putUser = (user_id, token) => {
  const headers = {Authorization: `Bearer ${token}`};
  return {
    type: 'PUT_USER',
    payload: axios.put(`${url}/${user_id}`, {headers: headers}),
  };
};
