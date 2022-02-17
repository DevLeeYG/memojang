import axios from 'axios';
import { handleAction } from 'redux-actions';

const USER_LOGIN = 'userAUTH/USER_LOGIN';
const USER_SIGNUP = 'userAUTH/USER_SIGNUP';
const LOGIN_SUCCESS = 'userAUTH/LOGIN_SUCCESS';

// export const userLogin = (data: any) => async (dispatch: any) => {
//   dispatch({ type: USER_LOGIN });
//   try {
//     const response = await axios.get(data);
//     dispatch({
//       type: LOGIN_SUCCESS,
//       payload: response.data,
//     });
//   } catch (e) {
//     throw e;
//   }
// };

export const userSignUp = (data: any) => {
  axios.post('http://localhost:8080/singup', {
    id: data.id,
    password: data.passWord,
    repass: data.repassWord,
  });
};

const initialState = {
  userLogin: {
    login: false,
    username: '',
  },

  userSingup: {
    id: '',
    password: '',
  },
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
