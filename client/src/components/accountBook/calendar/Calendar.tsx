import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CalendarPicker, { CalendarPickerProps } from '@mui/lab/CalendarPicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import Badge from '@mui/material/Badge';
import PickersDay from '@mui/lab/PickersDay';
import DayCalendar from './dayCalendar/DayCalendar';
import MonthCalendar from './monthCalendar/MonthCalendar';
const Cal = ({ date, setDate, month, setMonth, monthData }: any) => {
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
        <DayCalendar monthData={monthData} date={date} setDate={setDate} />

        <MonthCalendar
          date={date}
          setDate={setDate}
          month={month}
          setMonth={setMonth}
          monthData={monthData}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default Cal;
