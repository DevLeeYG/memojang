import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CalendarPicker, { CalendarPickerProps } from '@mui/lab/CalendarPicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { constants } from 'buffer';

const Cal = ({ date, setDate, month, setMonth, getData }: any) => {
  const CustomCalendarPicker = styled(CalendarPicker)<CalendarPickerProps<any>>`
    margin: 0;
    width: 100%;
  `;

  const MonthTotal = getData[2]?.map(
    (el: { iprice: number; eprice: number }) => {
      return el.iprice + el.eprice;
    },
  );

  const reduceMonthTotal = MonthTotal?.reduce((a: number, b: number) => {
    return a + b;
  }, null);

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
        <Box sx={{ width: '50%' }}>
          <CustomCalendarPicker
            views={['day']}
            date={date}
            onChange={(newValue: any) => setDate(newValue)}
            showDaysOutsideCurrentMonth
          />
        </Box>
        <Box sx={{ width: '50%' }}>
          <CustomCalendarPicker
            views={['month']}
            date={month}
            onChange={(newValue: any) => setMonth(newValue)}
          />
          <Box sx={{ pt: 3, pr: 12, textAlign: 'right', fontSize: '30px' }}>
            월 현황: {reduceMonthTotal ? reduceMonthTotal : 0}
          </Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default Cal;
