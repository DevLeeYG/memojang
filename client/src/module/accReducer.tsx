const initialState = {
  calendar: {
    date: '',
  },
};

const CALENDAR_DATE = 'accReducer/CALENDAR_DATE';

export const calendarData = (data: any) => {
  return {
    type: CALENDAR_DATE,
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
    default:
      return state;
  }
};

export default acReducer;
