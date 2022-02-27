import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Cal from './calendar/Cal';
import Board from './calendar/Board';
import Calcul from './calendar/Calcul';
import { calendarData } from '../../module/accReducer';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
const drawerWidth = 240;

const Book = () => {
  const dispatch = useDispatch();

  const userKey = useSelector(
    (state: RootStateOrAny) => state.userReducer.userLogin.id,
  );
  const [total, setTotal] = useState<number>(0);
  const [totalbudget, setTotalbudget] = useState<number>(0);
  const [date, setDate] = useState(new Date());
  const [getData, setGetData] = useState([]);
  const [inAndOut, setInAndOut] = useState([]);

  const ArrayInOut = inAndOut.map((el: any) => {
    return el.iprice + el.eprice;
  });

  const InOutTotal = ArrayInOut.reduce((a, b) => {
    return a + b;
  }, null);

  // const handleToTalbudget = () => {
  //   //나의 총예산
  //   axios
  //     .get(`http://localhost:8080/money/total`, {
  //       params: {
  //         userKey,
  //       },
  //     })
  //     .then((res) => {
  //       setTotalbudget(res.data.data);
  //     });
  // };

  // const inAndOutPlus = () => {
  //   axios
  //     .get('http://localhost:8080/account/total', {
  //       params: {
  //         userKey,
  //       },
  //     })
  //     .then((res) => {
  //       setInAndOut(res.data);
  //     });
  // };

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
  //         dispatch(calendarData(date));
  //       }
  //     });
  // };

  const getAlldata = () => {
    axios
      .get(`http://localhost:8080/account`, {
        params: {
          userKey,
          date,
        },
      })
      .then((res) => {
        console.log('rerqrqewr', res);

        // if (res.status === 200) {
        //   setGetData(res.data);
        //   dispatch(calendarData(date));
        // }
      });
  };

  const handleTotalChange = (e: any) => {
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
  getAlldata();
  useEffect(() => {
    getAlldata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getAlldata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);
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
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <Box
            sx={{ border: '1px solid gray', height: '100vh', width: '100%' }}
          >
            <Box sx={{ display: 'flex' }}>
              예산 : <Typography> {totalbudget}원</Typography>
            </Box>
            <form onSubmit={handleSubmit}>
              <input
                placeholder="예산입력"
                onChange={handleTotalChange}
                value={total}
              />
              <button type="submit">입력</button>
            </form>
            남은예산 :{totalbudget + InOutTotal} 원
            <div>(예산 = 예산 + (지출+수입))</div>
          </Box>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Cal
            // getTodayData={getTodayData}
            getData={getData}
            setGetData={setGetData}
            date={date}
            setDate={setDate}
          />
          <Box sx={{ display: 'flex' }}>
            <Calcul
            // getTodayData={getTodayData}
            />
            <Board
            // getTodayData={getTodayData} myData={getData}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Book;
