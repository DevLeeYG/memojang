/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CalendarPicker, { CalendarPickerProps } from '@mui/lab/CalendarPicker';
import { CalendarProps, YmdData } from '../../../Type/Types';
const CustomCalendarPicker = styled(CalendarPicker)<CalendarPickerProps<any>>`
  margin: 0;
  width: 100%;

  .css-1dozdou {
    display: none;
  }
`;

const MonthCalendar = ({ yearData, date, setDate }: CalendarProps) => {
  const [monthData, setMonthData] = useState<number>(0);

  const mappingMonthData = () => {
    const filteredDate = yearData.filter((el: YmdData) => {
      return new Date(el.date).getMonth() === new Date(date).getMonth();
    });

    const getPlusPrice = filteredDate?.map((el: YmdData) => {
      return el.iprice + el.eprice;
    });

    const monthDatas = getPlusPrice?.reduce((a: number, b: number) => {
      return a + b;
    }, 0);

    setMonthData(monthDatas);
  };

  useEffect(() => {
    mappingMonthData();
  }, [mappingMonthData, yearData]);

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
          onChange={(changeMonth: Date | unknown) => setDate(changeMonth)}
        />
      </Box>
      <Box sx={{ textAlign: 'center' }}>월 현황:{monthData}원</Box>
    </Box>
  );
};

export default MonthCalendar;
