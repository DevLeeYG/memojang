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

export interface WriteProps {
  pickdataTitle: string;
  pickdataData: string;
}

export interface postElement {
  id: number;
  user_key: number;
  title: string;
  data: string;
  date: Date;
}

export interface noteBookProps {
  handleReq: Function;
  title: string;
  text: string;
  setText: Function;
}

export interface PaperProps {
  pickText: string;
  text: string;
  setText: Function;
}
