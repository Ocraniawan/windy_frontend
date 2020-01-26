import Axios from 'axios';
import {APP_URL} from '../../config/config';

const url = APP_URL.concat('user');
export const register = data => {
  return {
    type: 'REGISTER',
    payload: Axios.post(url.concat('/register'), data),
  };
};
