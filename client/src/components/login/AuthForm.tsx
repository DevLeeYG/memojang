import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material';
import { IconButton, makeStyles } from '@material-ui/core';
import SignUp from '../SignUp/SignUp';
import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux';

import axios from 'axios';
const container = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
    backgroundColor: '#027FFE',
  },
  root2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5px',
    backgroundColor: '#027FFE',
  },
  text: {
    marginLeft: '5px',
    marginRight: '5px',
  },
}));

type Pprops = {
  singUp: Boolean;
  setSignUp: Function;
  formChange: Boolean;
  setFormChange: Function;
};

const AuthForm = ({ singUp, setSignUp, formChange, setFormChange }: Pprops) => {
  const dispatch = useDispatch();

  type Information = { name: string; description: string };
  const navigate = useNavigate();
  const [id, onChangeId] = useInput('');
  const [passWord, onChangePassword] = useInput('');

  const [rePassword, setRePassword] = useState('');

  const rePass = (e: any) => {
    setRePassword(e.target.value);
  };

  const classes = container();

  const onSubmitForm = useCallback(() => {
    console.log('123123', { id, passWord });
    console.log('실행되냐?');
  }, [id, passWord]);

  const reqSignup = () => {
    axios
      .post('http://localhost:8080/singup', {
        data: {
          id,
          passWord,
          rePassword,
        },
      })
      .catch((err) => console.log(err));
  };

  const toSignUp = () => {
    setSignUp(true);
    navigate('/signup');
  };

  const toLogin = () => {
    setSignUp(false);
    navigate('/login');
  };

  return (
    <Box
      sx={{
        border: '1px solid black',
        width: '300px',
        height: '250px',
        padding: '15px',
      }}
    >
      <form onSubmit={onSubmitForm}>
        <TextField
          value={id}
          onChange={onChangeId}
          name="아이디"
          sx={{ width: '100%', margin: '10px 0px 10px 0px' }}
          label="아이디"
          placeholder="아이디를 입력하세요"
        />
        <TextField
          value={passWord}
          onChange={onChangePassword}
          type="password"
          name="비밀번호"
          sx={{ width: '100%' }}
          label="비밀번호"
          placeholder="비밀번호를 입력하세요"
        />
        {singUp === true && (
          <TextField
            value={rePassword}
            onChange={rePass}
            type="password"
            name="비밀번호 확인"
            sx={{ width: '100%', margin: '10px 0px 10px 0px' }}
            label="비밀번호 확인"
            placeholder="비밀번호를 재입력하세요"
          />
        )}

        <Box className={classes.root}>
          <Button>
            <Box sx={{ display: 'flex', color: 'white' }}>
              {singUp ? (
                <Box onClick={reqSignup}>가입하기</Box>
              ) : (
                <Box>로그인</Box>
              )}
            </Box>
          </Button>
        </Box>
      </form>
      {!singUp ? (
        <Box
          sx={{ paddingTop: 3, textAlign: 'right', color: '#027FFE' }}
          onClick={toSignUp}
        >
          회원가입
        </Box>
      ) : (
        <Box
          sx={{ paddingTop: 3, textAlign: 'right', color: '#027FFE' }}
          onClick={toLogin}
        >
          로그인 하기
        </Box>
      )}
    </Box>
  );
};

export default AuthForm;
