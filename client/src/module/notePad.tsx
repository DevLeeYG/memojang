import axios from 'axios';
const WRITE_SUCCESS = 'userAUTH/WRITE_SUCCESS';
const WRITE_FAILURE = 'userAUTH/WRITE_FAILURE';
const WRITE_REQUEST = 'userAUTH/WRITE_REQUEST';

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
  content: {
    write: '',
  },
};

const writeSave = (data: any) => {
  return (dispatch: any) => {
    axios.post('http://localhost:8080/notepad/save', {});
  };
};

const notePadReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case WRITE_SUCCESS:
      return {
        ...state,
        content: { write: action.data },
      };
    default:
      return state;
  }
};
