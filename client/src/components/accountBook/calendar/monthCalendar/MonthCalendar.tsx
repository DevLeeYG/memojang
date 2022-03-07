import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CalendarPicker, { CalendarPickerProps } from '@mui/lab/CalendarPicker';
import { monthData } from '../../../Type/Types';

const MonthCalendar = ({ yearData, date, setDate, monthData }: monthData) => {
  const CustomCalendarPicker = styled(CalendarPicker)<CalendarPickerProps<any>>`
    margin: 0;
    width: 100%;

    .css-1dozdou {
      display: none;
    }
  `;

  const filteredDate = yearData.filter((el: any) => {
    return new Date(el.date).getMonth() + 1 === new Date(date).getMonth() + 1;
  });

  const a = filteredDate?.map((el: any) => {
    return el.iprice + el.eprice;
  });

  const monthDatas = a?.reduce((a: number, b: number) => {
    return a + b;
  }, 0);

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          p: 5,
          justifyContent: 'center',
          alignItems: 'center',
          width: '80%',
        }}
      >
        <CustomCalendarPicker
          views={['month']}
          date={date}
          onChange={(newValue: Date | unknown) => setDate(newValue)}
        />
      </Box>
      <Box sx={{ textAlign: 'center' }}>월 현황:{monthDatas}원</Box>
    </Box>
  );
};

export default MonthCalendar;
