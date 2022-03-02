import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CalendarPicker, { CalendarPickerProps } from '@mui/lab/CalendarPicker';

const MonthCalendar = ({ month, setMonth, monthData }: any) => {
  const CustomCalendarPicker = styled(CalendarPicker)<CalendarPickerProps<any>>`
    margin: 0;
    width: 100%;
  `;
  const a = monthData?.map((el: any) => {
    return el.iprice + el.eprice;
  });

  const monthDatas = a?.reduce((a: number, b: number) => {
    return a + b;
  }, null);

  return (
    <div>
      <Box sx={{ widht: '50%' }}>
        <CustomCalendarPicker
          views={['month']}
          date={month}
          onChange={(newValue: any) => setMonth(newValue)}
        />
        <Box sx={{ pt: 3, pr: 12, textAlign: 'right', fontSize: '30px' }}>
          월 현황:{monthDatas ? monthDatas : 0}원
        </Box>
        <Box sx={{ textAlign: 'right' }}>적자일시 - 표시</Box>
      </Box>
    </div>
  );
};

export default MonthCalendar;
