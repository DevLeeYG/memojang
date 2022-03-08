export interface yearData {
  yearData: any[];
  date: Date;
  setDate: Function;
}

export interface monthData {
  yearData: any[];
  date: Date;
  setDate: Function;
}

export interface calendar {
  yearData: any[];
  date: Date;
  setDate: Function;
}

export interface inout {
  date: Date;
  getCalendarData: Function;
}

export interface ymdData {
  id: number;
  date: Date;
  eprice: number | null;
  expendive: string | null;
  import: string;
  iprice: number | null;
  user_key: number;
}

export interface BoardProps {
  yearData: ymdData[];
  date: Date;
  getCalendarData: Function;
}
