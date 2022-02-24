import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CalendarPicker, { CalendarPickerProps } from '@mui/lab/CalendarPicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { calendarData } from '../../../module/accReducer';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import axios from 'axios';
import { getMydata } from '../../../module/accReducer';
const Cal = ({ getData, setGetData, date, setDate, getTodayData }: any) => {
  // const dispatch = useDispatch();
  // const [date, setDate] = useState(new Date());
  // const [getData, setGetData] = useState([]);
  // const myData = useSelector((state: RootStateOrAny) => state.acReducer.myData);

  // const dateDate = useSelector(
  //   (state: RootStateOrAny) => state.acReducer.calendar.date,
  // );
  // const userKey = useSelector(
  //   (state: RootStateOrAny) => state.userReducer.userLogin.id,
  // );

  const CustomCalendarPicker = styled(CalendarPicker)<CalendarPickerProps<any>>`
    margin: 0;
    width: 100%;
  `;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const getTodayData = () => {
  //   axios
  //     .get(`http://localhost:8080/account`, {
  //       params: {
  //         userKey,
  //         date,
  //       },
  //     })
  //     .then((res) => {
  //       if (res.status === 200) {
  //         setGetData(res.data);
  //         dispatch(getMydata(getData));
  //       }
  //     });
  // };

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
