import { Box, Typography } from '@mui/material';
import React from 'react';

const Board = () => {
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
        <Typography variant="h3">일 결산</Typography>
      </Box>
      <Box sx={{ padding: 10, width: '100%' }}>
        <Typography sx={{ display: 'flex', width: '100%' }} variant="h6">
          <Box sx={{ width: '30%' }}>수입</Box> <Box>123</Box>
        </Typography>
        <Typography sx={{ display: 'flex', width: '100%' }} variant="h6">
          <Box sx={{ width: '30%' }}>지출</Box> <Box>123</Box>
        </Typography>
        <Typography sx={{ display: 'flex', width: '100%' }} variant="h6">
          <Box sx={{ width: '30%' }}>합계</Box> <Box>123</Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default Board;
