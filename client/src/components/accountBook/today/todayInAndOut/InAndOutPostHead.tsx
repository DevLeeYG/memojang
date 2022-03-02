import React from 'react';
import { Box, Typography } from '@mui/material';
import CalPost from './InAndOutPost';

const Calcul = ({ getTotalMoney, getTotalMoneyb }: any) => {
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
          <CalPost
            getTotalMoney={getTotalMoney}
            getTotalMoneyb={getTotalMoneyb}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calcul;
