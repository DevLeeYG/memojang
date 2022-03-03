import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CalendarPicker, { CalendarPickerProps } from '@mui/lab/CalendarPicker';

import Badge from '@mui/material/Badge';
import PickersDay from '@mui/lab/PickersDay';

const DayCalendar = ({ date, setDate }: any) => {
  const CustomCalendarPicker = styled(CalendarPicker)<CalendarPickerProps<any>>`
    margin: 0;
    width: 100%;
  `;

  return (
    <Box sx={{ width: '50%' }}>
      <CustomCalendarPicker
        views={['day']}
        date={date}
        onChange={(newValue: any) => setDate(newValue)}
        renderDay={(day, _value, DayComponentProps) => {
          const isSelected = 0;
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
  );
};

export default DayCalendar;
