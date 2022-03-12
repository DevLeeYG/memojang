import axios from 'axios';
const WRITE_SUCCESS = 'userAUTH/WRITE_SUCCESS';
const WRITE_FAILURE = 'userAUTH/WRITE_FAILURE';
const WRITE_REQUEST = 'userAUTH/WRITE_REQUEST';
const REQUEST_LIST = 'userAUTH/REQUEST_LIST';

const WRITERequestAction = (data: boolean) => {
  return {
    type: WRITE_REQUEST,
    data,
  };
};

const WRITESuccessAction = (data: any) => {
  return {
    type: WRITE_SUCCESS,
    data,
  };
};

const WRITEFailureAction = (data: any) => {
  return {
    type: WRITE_FAILURE,
    data,
  };
};

const initialState = {
  content: [],
};

export const requestList = (data: any) => {
  return {
    type: REQUEST_LIST,
    data,
  };
};

export const writeSave = (data: any) => {
  return (dispatch: any) => {
    axios
      .post('http://localhost:8080/notepad/save', {
        userKey: data.userKey,
        title: data.title,
        text: data.text,
      })
      .then((res) => {
        if (res.status === 200) {
        }
      });
  };
};

const notePadReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case WRITE_SUCCESS:
      return {
        ...state,
        content: { write: action.data },
      };
    case REQUEST_LIST:
      return {
        ...state,
        content: action.data,
      };
    default:
      return state;
  }
};
export default notePadReducer;
