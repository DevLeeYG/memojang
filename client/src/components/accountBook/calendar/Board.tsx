import React from 'react';
import { Box, Divider, Typography } from '@mui/material';

const Board = ({ myData }: any) => {
  const importData = myData.map((el: any) => {
    return (
      <Typography
        key={el.id}
        sx={{ display: 'flex', width: '100%' }}
        variant="h6"
      >
        <Box sx={{ width: '100%' }}>{el.import}</Box> <Box>{el.iprice}</Box>
      </Typography>
    );
  });
  const expendiveData = myData.map((el: any) => {
    return (
      <Typography
        key={el.id}
        sx={{ display: 'flex', width: '100%' }}
        variant="h6"
      >
        <Box sx={{ width: '100%' }}>{el.expendive}</Box> <Box>{el.eprice}</Box>
      </Typography>
    );
  });

  let arrayPrice = myData?.map((a: any) => {
    return a.iprice + a.eprice;
  });

  let priceReducer = arrayPrice?.reduce((a: any, b: any) => {
    return a + b;
  }, null);

  // console.log();

  return (
    <Box sx={{ width: '50%', height: '300px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
          height: '50px',
        }}
      >
        <Typography sx={{ marginTop: '20px' }} variant="h3">
          일 결산
        </Typography>
      </Box>
      <Box sx={{ padding: 6.5, width: '100%' }}>
        {importData}
        {expendiveData}
        <Divider />
        <Typography
          sx={{ display: 'flex', width: '100%', marginTop: '20px' }}
          variant="h6"
        >
          <Box sx={{ width: '100%' }}>합계</Box>
          <Box>{priceReducer}₩</Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default Board;
