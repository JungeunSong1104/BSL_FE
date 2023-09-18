import axios from 'axios';
import { config } from './config';

const instance = axios.create({
  baseURL: config.server.host,
  timeout: 20000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    accept: 'application/json',
  },
});


//2. 요청 인터셉터
instance.interceptors.request.use(
  //요청직전 호출
  (config) => {
    const token = localStorage.getItem('token');


    if(token) {
      config.headers = {
        'Content-Type': 'application/json; charset=UTF-8',
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  //에러 전 호출
  (err) => {
    return Promise.reject(err);
  },
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default instance;
