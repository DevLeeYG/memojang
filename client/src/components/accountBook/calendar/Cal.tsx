import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CalendarPicker, { CalendarPickerProps } from '@mui/lab/CalendarPicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { calendarData } from '../../../module/accReducer';
import { useDispatch, useSelector } from 'react-redux';
const Cal = () => {
  const dispatch = useDispatch();

  const CustomCalendarPicker = styled(CalendarPicker)<CalendarPickerProps<any>>`
    margin: 0;
    width: 100%;
  `;
  //useEffect 로 date가 변할때마다 api 신청

  const [date, setDate] = useState(new Date());
  console.log('date', date);
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

  useEffect(() => {
    dispatch(calendarData(getYmd10(date)));
  }, [date]);

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
