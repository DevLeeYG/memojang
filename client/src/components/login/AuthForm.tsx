import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material';
import { IconButton, makeStyles } from '@material-ui/core';
import SignUp from '../SignUp/SignUp';
import useInput from '../hooks/useInput';

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
  type Information = { name: string; description: string };
  const navigate = useNavigate();
  const [id, onChangeId] = useInput('');
  const [passWord, onChangePassword] = useInput('');

  const classes = container();

  //   const onChangeId = (e: any) => {
  //     console.log(idchange);
  //     setIdchange(e.target.value);
  //   };

  const onSubmitForm = useCallback(() => {
    console.log('123123', { id, passWord });
    console.log('실행되냐?');
  }, [id, passWord]);

  const toSignUp = () => {};

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
              {singUp ? <Box>가입하기</Box> : <Box>로그인</Box>}
            </Box>
          </Button>
        </Box>
      </form>
      {!singUp ? (
        <Box
          sx={{ paddingTop: 3, textAlign: 'right', color: '#027FFE' }}
          onClick={() => setSignUp(true)}
        >
          회원가입
        </Box>
      ) : (
        <Box
          sx={{ paddingTop: 3, textAlign: 'right', color: '#027FFE' }}
          onClick={() => setSignUp(false)}
        >
          로그인 하기
        </Box>
      )}
    </Box>
  );
};

export default AuthForm;
