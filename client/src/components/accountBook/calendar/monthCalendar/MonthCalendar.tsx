import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CalendarPicker, { CalendarPickerProps } from '@mui/lab/CalendarPicker';

const MonthCalendar = ({ date, setDate, month, setMonth, monthData }: any) => {
  const CustomCalendarPicker = styled(CalendarPicker)<CalendarPickerProps<any>>`
    margin: 0;
    width: 100%;

    .css-1dozdou {
      display: none;
    }
  `;
  const a = monthData?.map((el: any) => {
    return el.iprice + el.eprice;
  });

  const monthDatas = a?.reduce((a: number, b: number) => {
    return a + b;
  }, null);

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          widht: '50%',
          height: '350px',
        }}
      >
        <CustomCalendarPicker
          views={['month']}
          date={date}
          onChange={(newValue: any) => setDate(newValue)}
        />
      </Box>
      <Box>월 현황:{monthDatas ? monthDatas : 0}원</Box>
    </div>
  );
};

export default MonthCalendar;
