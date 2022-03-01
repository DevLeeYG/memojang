import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import axios from 'axios';

interface getData {
  id: number;
  expendive: boolean;
  import: string;
  iprice: number;
  eprice: number;
}
interface propsTyp {
  getData: any[];
  getAlldata: Function;
}

const Board = ({ getData, getAlldata }: propsTyp) => {
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

  const importData = getData[0]?.map((el: getData) => {
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

  const expendiveData = getData[0]?.map((el: getData) => {
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
      </Typography>
    );
  });

  let arrayPrice = getData[0]?.map((a: any) => {
    return a.iprice + a.eprice;
  });

  let priceReducer = arrayPrice?.reduce((a: number, b: number) => {
    return a + b;
  }, null);

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
            합계 <Box>{priceReducer ? priceReducer : 0}원</Box>
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default Board;
