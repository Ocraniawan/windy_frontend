import Axios from 'axios';
import qs from 'qs';
import {APP_URL} from '../../config/config';

const url = APP_URL.concat('users');
export const postLogin = data => {
  return {
    type: 'POST_LOGIN',
    payload: Axios.post(url.concat('/login'), data),
  };
};
