export interface YmdData {
  id: number;
  date: Date;
  eprice: number;
  expendive: string | null;
  import: string;
  iprice: number;
  user_key: number;
}

export interface CalendarProps {
  yearData: YmdData[];
  date: Date;
  setDate: Function;
}

export interface Inout {
  date: Date;
  getCalendarData: Function;
}

export interface BoardProps {
  yearData: YmdData[];
  date: Date;
  getCalendarData: Function;
}
