import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { MenuStyles } from '../../makeStyles/Menu';
import { useNavigate } from 'react-router-dom';
const Menu = () => {
  const navigate = useNavigate();
  const classes = MenuStyles();
  return (
    <div>
      <Box sx={{ display: 'flex', width: '100%', height: '100vh' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
            height: '100vh',
          }}
        >
          <Typography
            className={classes.left}
            onClick={() => navigate('/memojang')}
            variant="h2"
          >
            메모장
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
            height: '100vh',
          }}
        >
          <Typography
            className={classes.right}
            onClick={() => navigate('/accountBook')}
            variant="h2"
          >
            가계부
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
            height: '100vh',
          }}
        >
          <Typography
            className={classes.right}
            onClick={() => navigate('/notepad/main')}
            variant="h2"
          >
            NotePad
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Menu;
