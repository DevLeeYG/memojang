import axios from 'axios';

export const reqLogin = (data: any) => {
  axios.post('/api/login');
};

export const reqSign = (data: any) => {
  axios.post('/api/signup');
};
