import axios from 'axios';
import { tryLogin } from '../lib/api';
const USER_LOGIN = 'userAUTH/USER_LOGIN';
const USER_SIGNUP = 'userAUTH/USER_SIGNUP';
const LOGIN_SUCCESS = 'userAUTH/LOGIN_SUCCESS';

const initialState = {
  userLogin: {
    login: false,
    username: '',
  },
};

export const userLogin = (id: string, passWord: string) => {
  //액션

  return {
    type: USER_LOGIN,
    playload: { id: id, password: passWord },
  };
};

export const userLoggedin = (id: string, passWord: any) => (dispatch: any) => {
  axios
    .post('http://localhost:8080/login', {
      id: id,
      password: passWord,
    })
    .then((res) => {
      console.log(res);
    });
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    // case USER_SIGNUP:
    //   return {
    //     ...state,
    //     userSignUp: {
    //       id: action.data.id
    //       password: action.
    //     },
    //   };

    case USER_LOGIN:
      return {
        ...state,
        userLogin: {
          ...state,
          login: true,
          username: action.payload.data,
        },
      };

    default:
      return state;
  }
};

export default userReducer;
