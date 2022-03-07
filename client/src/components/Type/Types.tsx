export interface yearData {
  yearData: any[];
  date: Date;
  setDate: Function;
}

export interface monthData {
  yearData: any[];
  date: Date;
  setDate: Function;
  monthData: any[];
}

export interface calendar {
  yearData: any[];
  date: Date;
  setDate: Function;
  monthData: any[];
}

export interface inout {
  date: Date;
  getCalendarData: Function;
}
