import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Calendar from './calendar/Calendar';
import Board from './calendar/Board';
import InAndOutPost from './calendar/InAndOutPostHead';
import { calendarData } from '../../module/accReducer';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import Sidebar from './calendar/Sidebar';
const drawerWidth = 240;

const Book = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTotalMoney();
    getTotalMoneyb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const userKey = useSelector(
    (state: RootStateOrAny) => state.userReducer.userLogin.id,
  );
  const [total, setTotal] = useState(''); //처음 예산 입력 상태
  const [injutyTotal, setInjuryTotal] = useState<any[]>([]); //총예산에서 뺄 데이터
  const [date, setDate] = useState(new Date()); //날짜
  const [month, setMonth] = useState(new Date()); //서버에 달계산을 위한 상태
  const [year, setYear] = useState(new Date()); // 연상태
  const [totalBudget, setTotalBudget] = useState([]); //총예산

  const getTotalMoney = () => {
    axios
      .get(`http://localhost:8080/account/totalmoney`, {
        params: {
          userKey,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setTotalBudget(res.data);
        }
      });
  };

  const getTotalMoneyb = () => {
    axios
      .get(`http://localhost:8080/account/totalmoneyb`, {
        params: {
          userKey,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setInjuryTotal(res.data);
        }
      });
  };

  const handleTotalChange = (e: {
    target: { value: React.SetStateAction<string> };
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
        setTotal('');
        if (res.status === 200) getTotalMoney();
        getTotalMoneyb();
      });
  };
  //콘솔로그가 2번뜨는 이는 유즈 이펙트를 2개를 써서
  // useEffect(() => {
  //   getTotalMoney();

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [date, month, year]);

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
          total={total}
          // getData={getData}
          injutyTotal={injutyTotal}
          totalBudget={totalBudget}
          handleSubmit={handleSubmit}
          handleTotalChange={handleTotalChange}
        />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Calendar
            getTodayData={getTotalMoney}
            date={date}
            month={month}
            setMonth={setMonth}
            setDate={setDate}
          />
          <Box sx={{ display: 'flex' }}>
            <InAndOutPost getTodayData={getTotalMoney} />
            {/* <Board getAlldata={getTotalMoney} /> */}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Book;
