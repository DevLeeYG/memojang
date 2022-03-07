import React, { useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Calendar from './calendar/Calendar';
import Board from './today/todayResult/Board';
import InAndOutPostHead from '../accountBook/today/todayInAndOut/InAndOutPostHead';
import { useSelector, RootStateOrAny } from 'react-redux';

const Book = () => {
  const userKey = useSelector(
    (state: RootStateOrAny) => state.userReducer.userLogin.id,
  );

  const [date, setDate] = useState(new Date()); //날짜
  const [month, setMonth] = useState(new Date()); //서버에 달계산을 위한 상태
  const [todayData, setTodayData] = useState([]);
  const [monthData, setMonthData] = useState([]);
  const [yearData, setYearData] = useState([]);

  const getCalendarData = () => {
    axios
      .get(`http://localhost:8080/account/calendar/data`, {
        params: {
          date,
          userKey,
          month: date,
        },
      })
      .then((res) => {
        console.log(res.data[2]);

        setTodayData(res.data[0]);
        setMonthData(res.data[1]);
        setYearData(res.data[2]);
      });
  };

  useEffect(() => {
    getCalendarData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, month]);
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              가계부
            </Typography>
          </Toolbar>
        </AppBar>

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Calendar
            yearData={yearData}
            date={date}
            month={month}
            monthData={monthData}
            setMonth={setMonth}
            setDate={setDate}
          />
          <Box sx={{ display: 'flex' }}>
            <InAndOutPostHead date={date} getCalendarData={getCalendarData} />
            <Board
              getCalendarData={getCalendarData}
              todayData={todayData}
              monthData={monthData}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Book;
