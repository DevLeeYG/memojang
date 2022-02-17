const USER_SIGNUP = 'userAuth/USER_SIGNUP';
const USER_LOGIN = 'userAUTH/USER_LOGIN';

export const userLogin = () => {};

export const userSingup = () => {};

const initialState = {};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        action,
      };
    case USER_LOGIN:
      return {
        ...state,
        action,
      };
    default:
      return state;
  }
};

export default userReducer;
