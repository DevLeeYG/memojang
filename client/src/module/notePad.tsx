/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';

const WRITE_SUCCESS = 'userAUTH/WRITE_SUCCESS';
const REQUEST_LIST = 'userAUTH/REQUEST_LIST';
const PICK_ID = 'useAUTH/PICK_ID';
const PICK_PREVDATA = 'useATUH/PICK_PREVDATA';
const PICK_NEXTDATA = 'useATUH/PCIK_NEXTDATA';
const initialState = {
  id: 0,
  content: [],
  prevdata: [],
  nextdata: [],
};

export const pickNextData = (data: any) => {
  return {
    type: PICK_NEXTDATA,
    data,
  };
};
export const pickPrevData = (data: any) => {
  return {
    type: PICK_PREVDATA,
    data,
  };
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

export const requestEditPost = (data: any) => {
  axios
    .put('http://localhost:8080/notepad/editpost', {
      data,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
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
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteContent = (data: any) => {
  return (dispatch: any) => {
    axios
      .delete(`http://localhost:8080/notepad/delete`, {
        data: { data },
      })

      .catch((err) => {
        console.log(err);
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
      })
      .catch((err) => {
        console.log(err);
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
    case PICK_NEXTDATA:
      return {
        ...state,
        nextdata: action.data,
      };
    case PICK_PREVDATA:
      return {
        ...state,
        prevdata: action.data,
      };
    default:
      return state;
  }
};

export default notePadReducer;
