import { Box, Container } from '@material-ui/core';
import React from 'react';
import LockIcon from '@mui/icons-material/Lock';

const AuthHead = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '50px',
          paddingTop: '10px',
          fontSize: '30px',
        }}
      >
        LeeLOg
      </Box>
      <Box sx={{ fontSize: '20', padding: '10px' }}>
        나의 일상을 기록하는 블로그
      </Box>
    </Box>
  );
};

export default AuthHead;
