import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Cal from './calendar/Cal';
import Board from './calendar/Board';
import Calcul from './calendar/Calcul';
import { calendarData } from '../../module/accReducer';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import Sidebar from './calendar/Sidebar';
const drawerWidth = 240;

const Book = () => {
  const dispatch = useDispatch();

  const userKey = useSelector(
    (state: RootStateOrAny) => state.userReducer.userLogin.id,
  );
  const [total, setTotal] = useState<number>(0);
  const [totalbudget, setTotalbudget] = useState<number>(0);
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(new Date());
  const [year, setYear] = useState(new Date());
  const [getData, setGetData] = useState<any[]>([]);

  useEffect(() => {
    getAlldata();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAlldata = () => {
    axios
      .get(`http://localhost:8080/account`, {
        params: {
          userKey,
          date,
          month,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setTotalbudget(res.data[1][0].money);
          setGetData(res.data);
          dispatch(calendarData(date));
        }
      });
  };

  const handleTotalChange = (e: {
    target: { value: React.SetStateAction<number> };
  }) => {
    setTotal(e.target.value);
  };

  const handleSubmit = (e: any) => {
    //수입지출 변동시 남은 예산 계산요청
    e.preventDefault();
    axios
      .put(`http://localhost:8080/money/total`, {
        total,
        userKey,
      })
      .then((res) => {
        setTotalbudget(res.data);
      });
  };

  useEffect(() => {
    getAlldata();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, month, year]);
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              월별 가계부
            </Typography>
          </Toolbar>
        </AppBar>
        <Sidebar
          getData={getData}
          totalbudget={totalbudget}
          total={total}
          handleSubmit={handleSubmit}
          handleTotalChange={handleTotalChange}
        />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Cal
            getTodayData={getAlldata}
            getData={getData}
            setGetData={setGetData}
            date={date}
            month={month}
            setMonth={setMonth}
            setDate={setDate}
          />
          <Box sx={{ display: 'flex' }}>
            <Calcul getTodayData={getAlldata} />
            <Board getAlldata={getAlldata} getData={getData} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Book;
