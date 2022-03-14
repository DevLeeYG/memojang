/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const WRITE_SUCCESS = 'userAUTH/WRITE_SUCCESS';
const WRITE_FAILURE = 'userAUTH/WRITE_FAILURE';
const WRITE_REQUEST = 'userAUTH/WRITE_REQUEST';
const REQUEST_LIST = 'userAUTH/REQUEST_LIST';
const PICK_ID = 'useAUTH/PICK_ID';
const PICK_DELETE = 'userAUTH/PICK_DELETE';
const initialState = {
  id: 0,
  content: [],
};

export const pickListId = (data: any) => {
  return {
    type: PICK_ID,
    data,
  };
};

export const requestList = (data: any) => {
  return {
    type: REQUEST_LIST,
    data,
  };
};

export const getList = (key: number) => {
  return (dispatch: any) => {
    axios
      .get('http://localhost:8080/notepad/list', {
        params: { userkey: key },
      })

      .then((res) => {
        if (res.status === 200) {
          dispatch(requestList(res.data));
        }
      });
  };
};

export const deleteContent = (data: any) => {
  return (dispatch: any) => {
    axios
      .delete(`http://localhost:8080/notepad/delete`, {
        data: { data },
      })
      .then((res) => {
        console.log('123123', res.data);
        dispatch(getList(data.userKey));
      });
  };
};

export const writeSave = (data: any) => {
  return (dispatch: any) => {
    axios
      .post('http://localhost:8080/notepad/save', {
        userKey: data.userKey,
        title: data.title,
        text: data.text,
        date: data.date,
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
    case PICK_ID:
      return {
        ...state,
        id: action.data,
      };
    default:
      return state;
  }
};

export default notePadReducer;
