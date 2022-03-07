import React, { useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Calendar from './calendar/Calendar';
import Board from './today/todayResult/Board';
import InAndOutPost from './today/InAndOut/InAndOutPost';
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

  const getCalendarData = useCallback(() => {
    axios
      .get(`http://localhost:8080/account/calendar/data`, {
        params: {
          date,
          userKey,
          month: date,
        },
      })
      .then((res) => {
        setTodayData(res.data[0]);
        setMonthData(res.data[1]);
        setYearData(res.data[2]);
      });
  }, [date, userKey]);

  useEffect(() => {
    getCalendarData();
  }, [date, getCalendarData, month]);
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
            monthData={monthData}
            setDate={setDate}
          />
          <Box sx={{ display: 'flex' }}>
            <InAndOutPost date={date} getCalendarData={getCalendarData} />
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
