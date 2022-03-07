import React from 'react';
import { Box, Typography } from '@mui/material';
import InAndOutPost from './InAndOutPost';

const Calcul = ({
  date,
  getTotalMoney,
  getTotalMoneyb,
  getCalendarData,
}: any) => {
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
          <InAndOutPost
            date={date}
            getCalendarData={getCalendarData}
            getTotalMoney={getTotalMoney}
            getTotalMoneyb={getTotalMoneyb}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calcul;
