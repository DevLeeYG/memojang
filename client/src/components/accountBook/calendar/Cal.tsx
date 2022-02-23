import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CalendarPicker, { CalendarPickerProps } from '@mui/lab/CalendarPicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const Cal = () => {
  const CustomCalendarPicker = styled(CalendarPicker)<CalendarPickerProps<any>>`
    margin: 0;
    width: 100%;
  `;
  //useEffect 로 date가 변할때마다 api 신청
  const getYmd10 = (date: Date) => {
    let d = date;
    return (
      d.getFullYear() +
      '-' +
      (d.getMonth() + 1 > 9
        ? (d.getMonth() + 1).toString()
        : '0' + (d.getMonth() + 1)) +
      '-' +
      (d.getDate() > 9 ? d.getDate().toString() : '0' + d.getDate().toString())
    );
  };

  const [date, setDate] = useState(new Date());

  console.log(getYmd10(date));

  const val = () => {
    return;
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        sx={(theme) => ({
          width: '100%',
          height: '50%',
          backgroundColor: theme.palette.grey[50],
        })}
      >
        <CustomCalendarPicker
          views={['day']}
          date={date}
          onChange={(newValue: any) => setDate(newValue)}
          showDaysOutsideCurrentMonth
        />
      </Box>
    </LocalizationProvider>
  );
};

export default Cal;
