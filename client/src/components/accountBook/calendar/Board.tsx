import React from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import axios from 'axios';
import { getMydata } from '../../../module/accReducer';
import { ContactlessOutlined } from '@mui/icons-material';

const Board = ({ getData, getAlldata }: any) => {
  const reqDelete = (id: number) => {
    axios
      .delete(`http://localhost:8080/account/delete`, {
        data: { id: id },
      })
      .then((res) => {
        if (res.status === 200) {
          getAlldata();
        }
      });
  };

  const importData = getData[0]?.map((el: any) => {
    return (
      <>
        <Typography
          key={el.id}
          sx={{ display: 'flex', width: '100%' }}
          variant="h6"
        >
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
      </>
    );
  });

  const expendiveData = getData[0]?.map((el: any) => {
    return (
      <Typography
        key={el.id}
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
        {/* <Button>{btn.length}</Button> */}
      </Typography>
    );
  });

  // let arrayPrice = myData?.map((a: any) => {
  //   return a.iprice + a.eprice;
  // });

  // let priceReducer = arrayPrice?.reduce((a: any, b: any) => {
  //   return a + b;
  // }, null);

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
          {/* <Box>{priceReducer}₩</Box> */}
        </Typography>
      </Box>
    </Box>
  );
};

export default Board;

function getTodayData() {
  throw new Error('Function not implemented.');
}
