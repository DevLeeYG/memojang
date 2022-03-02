import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const drawerWidth = 240;

function Sidebar({
 
  totalBudget,
  handleTotalChange,
  handleSubmit,
  total,
  injutyTotal,
}: any) {
  const totalMoney = totalBudget?.map((el: any) => {
    return el.money;
  });
 
  const injurydata = injutyTotal?.map((el: any) => {
    return el.iprice + el.eprice;
  });

  const injury = injurydata?.reduce((a: any, b: any) => {
    return a + b;
  }, null);

  return (
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
      <Box sx={{ border: '1px solid gray', height: '100vh', width: '100%' }}>
        <Box sx={{ display: 'flex' }}>
          예산 :<Typography> {totalMoney[0] ? totalMoney[0] : 0}원</Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="예산입력"
            onChange={handleTotalChange}
            value={total}
          />
          <button type="submit">입력</button>
        </form>

        <div>남은 예산:{totalMoney[0] ? totalMoney[0] + injury : 0}</div>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
