import { Box } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DayCalendar from './dayCalendar/DayCalendar';
import MonthCalendar from './monthCalendar/MonthCalendar';
import YearCalendar from './yearCalendar/YearCalendar';
import { CalendarProps } from '../../Type/Types';

const Calendar = ({ yearData, date, setDate }: CalendarProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        sx={(theme) => ({
          display: 'flex',
          width: '100%',
          height: '50%',
          backgroundColor: theme.palette.grey[50],
        })}
      >
        <DayCalendar yearData={yearData} date={date} setDate={setDate} />
        <MonthCalendar yearData={yearData} date={date} setDate={setDate} />
        <YearCalendar yearData={yearData} date={date} setDate={setDate} />
      </Box>
    </LocalizationProvider>
  );
};

export default Calendar;
