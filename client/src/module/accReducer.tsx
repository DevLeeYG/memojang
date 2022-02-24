const initialState = {
  calendar: {
    date: '',
  },
  myData: {
    data: [],
  },
};

const CALENDAR_DATE = 'accReducer/CALENDAR_DATE';
const GETMY_DATA = 'accReducer/GETMY_DATA';
export const calendarData = (data: any) => {
  return {
    type: CALENDAR_DATE,
    data,
  };
};

export const getMydata = (data: never[]) => {
  return {
    type: GETMY_DATA,
    data,
  };
};

const acReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CALENDAR_DATE:
      return {
        ...state,
        calendar: {
          date: action.data,
        },
      };
    case GETMY_DATA:
      return {
        ...state,
        myData: [...action.data],
      };
    default:
      return state;
  }
};

export default acReducer;
