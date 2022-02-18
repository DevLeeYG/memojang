import axios from 'axios';

export const tryLogin = (data: any) => {
  axios.post('/login').then((res) => {
    console.log(res);
  });
};

export const reqSign = (data: any) => {
  axios.post('/api/signup');
};
