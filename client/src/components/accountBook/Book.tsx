import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useSelector, RootStateOrAny } from 'react-redux';
import Cal from './calendar/Cal';
import Board from './calendar/Board';
import Calcul from './calendar/Calcul';
import Selec from './calendar/Selec';
import { TextField } from '@mui/material';

const drawerWidth = 240;

const Book = () => {
  const [total, setTotal] = useState<number>(0);
  const handleTotalChange = (e: any) => {
    setTotal(e.target.value);
  };
  const userKey = useSelector(
    (state: RootStateOrAny) => state.userReducer.userLogin.id,
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/money/total`, {
      total,
      userKey,
    });
  };

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
              총 예산 : <Typography> 원</Typography>
            </Box>
            <form onSubmit={handleSubmit}>
              <input
                placeholder="예산입력"
                onChange={handleTotalChange}
                value={total}
              />
              <button type="submit">입력</button>
            </form>

            <Box sx={{ display: 'flex' }}>
              월 결산 : <Typography>원</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              연 결산 : <Typography>원</Typography>
            </Box>
          </Box>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Cal />
          <Box sx={{ display: 'flex' }}>
            <Calcul /> <Board />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Book;
