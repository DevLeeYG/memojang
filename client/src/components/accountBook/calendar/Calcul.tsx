import React from 'react';
import { Box, Typography } from '@mui/material';
import CalPost from './CalPost';

const Calcul = ({ getTodayData }: any) => {
  return (
    <Box sx={{ borderRight: '1px solid black', width: '50%', height: '300px' }}>
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
          오늘 수입과 지출
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          marginTop: '60px',
        }}
      >
        <Box>
          <CalPost getTodayData={getTodayData} />
        </Box>
      </Box>
    </Box>
  );
};

export default Calcul;
