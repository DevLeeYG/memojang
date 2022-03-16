import axios from 'axios';

const LOGIN_SUCCESS = 'userAUTH/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'userAUTH/LOGIN_FAILURE';
const LOGIN_REQUEST = 'userAUTH/LOGIN_REQUEST';

const initialState = {
  Loading: {
    loading: false,
  },

  userLogin: {
    id: null,
    login: false,
    username: '',
  },
  LoginFalse: false,
};

const LoginRequestAction = (data: boolean) => {
  return {
    type: LOGIN_REQUEST,
    data,
  };
};

const LoginSuccessAction = (data: any) => {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
};

const LoginFailureAction = (data: any) => {
  return {
    type: LOGIN_FAILURE,
    data,
  };
};

export const userLoggedin = (data: any) => {
  return (dispatch: any) => {
    dispatch(LoginRequestAction(true)); //로딩 페이지 만들어주면될거같고

    axios
      .post('http://localhost:8080/login', {
        user: data.id,
        password: data.passWord,
      })
      .then((res) => {
        dispatch(LoginSuccessAction({ id: res.data.id, user: res.data.user }));
        dispatch(LoginRequestAction(false)); // dispatch(LoginSuccessAction(res.data.data.user));
      })
      .catch((err) => dispatch(LoginFailureAction(err)));
  };
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        Loading: {
          loding: action.data,
        },
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        userLogin: {
          id: action.data.id,
          login: true,
          username: action.data.user,
        },
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        userLogin: false,
        username: null,
      };

    default:
      return state;
  }
};

export default userReducer;
