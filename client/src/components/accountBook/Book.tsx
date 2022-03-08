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
import { YmdData } from '../Type/Types';
const Book = () => {
  const [date, setDate] = useState<Date>(new Date()); //날짜
  const [yearData, setYearData] = useState<YmdData[]>([]);
  const userKey = useSelector(
    (state: RootStateOrAny) => state.userReducer.userLogin.id,
  );
  const getCalendarData = useCallback(() => {
    axios
      .get(`http://localhost:8080/account/calendar/data`, {
        params: {
          date,
          userKey,
        },
      })
      .then((res) => {
        setYearData(res.data);
      });
  }, [date, userKey]);

  useEffect(() => {
    getCalendarData();
  }, [date, getCalendarData]);

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
          <Calendar yearData={yearData} date={date} setDate={setDate} />
          <Box sx={{ display: 'flex' }}>
            <InAndOutPost date={date} getCalendarData={getCalendarData} />
            <Board
              date={date}
              getCalendarData={getCalendarData}
              yearData={yearData}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Book;
