import { Container, Box } from '@material-ui/core';
import { useState } from 'react';
import AuthForm from './form/AuthForm';
import AuthHead from './form/AuthHead';

const Auth = () => {
  const [singUp, setSignUp] = useState<Boolean>(false);

  return (
    <div>
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: '#cfe8fc',
            height: '100vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={{ border: '1px solid yellow' }}>
            <AuthHead />
            <AuthForm singUp={singUp} setSignUp={setSignUp} />
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Auth;
