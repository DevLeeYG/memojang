import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CalendarPicker, { CalendarPickerProps } from '@mui/lab/CalendarPicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import Badge from '@mui/material/Badge';
import PickersDay from '@mui/lab/PickersDay';
const Cal = ({ date, setDate, month, setMonth, getData }: any) => {
  console.log(getData);

  const CustomCalendarPicker = styled(CalendarPicker)<CalendarPickerProps<any>>`
    margin: 0;
    width: 100%;
  `;

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
            renderDay={(day, _value, DayComponentProps) => {
              const isSelected = 1;
              return (
                <Badge
                  overlap="circular"
                  badgeContent={isSelected ? '🌚' : undefined}
                >
                  <PickersDay {...DayComponentProps} />
                </Badge>
              );
            }}
          />
        </Box>

        <Box sx={{ width: '50%' }}>
          <CustomCalendarPicker
            views={['month']}
            date={month}
            onChange={(newValue: any) => setMonth(newValue)}
          />
          <Box sx={{ pt: 3, pr: 12, textAlign: 'right', fontSize: '30px' }}>
            월 현황:
          </Box>
          <Box sx={{ textAlign: 'right' }}>적자일시 - 표시</Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default Cal;
