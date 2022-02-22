import { Box, Typography } from '@mui/material';
import React from 'react';
import Selec from './Selec';
import SignupForm from './SignupForm';

const Calcul = () => {
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
        <Typography variant="h3">오늘 수입과 지출</Typography>
      </Box>
      <Box sx={{ padding: 10, width: '100%' }}></Box>
      <Box>
        {/* <Selec></Selec> */}
        <SignupForm />
      </Box>
    </Box>
  );
};

export default Calcul;
