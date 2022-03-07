import * as React from 'react';

import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

import CalendarPicker, { CalendarPickerProps } from '@mui/lab/CalendarPicker';

const minDate = new Date('2022-01-01T00:00:00.000');
const maxDate = new Date('2030-01-01T00:00:00.000');

const YearCalendar = ({ yearData, date, setDate, setMonth, month }: any) => {
  const a = yearData?.map((el: any) => {
    return el.iprice + el.eprice;
  });

  const yearDatas = a?.reduce((a: number, b: number) => {
    return a + b;
  }, null);

  const CustomCalendarPicker = styled(CalendarPicker)<CalendarPickerProps<any>>`
    display: 'flex';
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 100%;
  `;
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',

          width: '50%',
          height: '300px',
        }}
      >
        <CustomCalendarPicker
          views={['year']}
          minDate={minDate}
          maxDate={maxDate}
          date={date}
          onChange={(newValue: any) => setDate(newValue)}
        />
      </Box>
      <Box>연 현황 : {yearDatas ? yearDatas : 0}원</Box>
    </Box>
  );
};
export default YearCalendar;
