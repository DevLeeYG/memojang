import React, { useEffect, useState } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import axios from 'axios';
import { BoardProps, YmdData } from '../../../Type/Types';

const Board = ({ getCalendarData, yearData, date }: BoardProps) => {
  const reqDelete = (id: number) => {
    axios
      .delete(`http://localhost:8080/account/delete`, {
        data: { id: id },
      })
      .then((res) => {
        if (res.status === 200) {
          getCalendarData();
        }
      });
  };

  const filteredDate = yearData?.filter((day: YmdData) => {
    return new Date(day.date).getDate() === new Date(date).getDate();
  });

  let arrayPrice = filteredDate?.map((day: any) => {
    return day.iprice + day.eprice;
  });
  let priceReducer = arrayPrice?.reduce(
    (prevPrice: number, curPrice: number) => {
      return prevPrice + curPrice;
    },
    0,
  );

  const importData = filteredDate?.map((el: YmdData) => {
    return (
      <div key={el.id}>
        <Typography sx={{ display: 'flex', width: '100%' }} variant="h6">
          <Box sx={{ width: '100%' }}>
            <Box>{el.import}</Box>
          </Box>
          <Box
            onClick={() => {
              reqDelete(el.id);
            }}
            sx={{ display: 'flex', cursor: 'pointer' }}
          >
            {el.iprice}
          </Box>
        </Typography>
      </div>
    );
  });

  const expendiveData = filteredDate?.map((el: YmdData) => {
    return (
      <div key={el.id}>
        <Typography
          sx={{
            display: 'flex',
            width: '100%',
          }}
          variant="h6"
        >
          <Box sx={{ width: '100%' }}>{el.expendive}</Box>{' '}
          <Box
            onClick={() => {
              reqDelete(el.id);
            }}
            sx={{ display: 'flex', cursor: 'pointer' }}
          >
            {el.eprice}
          </Box>
        </Typography>
      </div>
    );
  });

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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            합계 <Box>{priceReducer}원</Box>
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default Board;
