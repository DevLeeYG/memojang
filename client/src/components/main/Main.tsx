import { Button, TextField, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RootStateOrAny, useSelector } from 'react-redux';
const Main = () => {
  const data = useSelector(
    (state: RootStateOrAny) => state.userReducer.userLogin.username,
  );

  const userKey = useSelector(
    (state: RootStateOrAny) => state.userReducer.userLogin.id,
  );

  const getMyPost = () => {
    axios
      .get(`http://localhost:8080/posts/`, { params: userKey })
      .then((res) => {
        console.log('123123', res.data);
      });
  };

  useEffect(() => {
    getMyPost();
  }, []);

  const [memo, setMemo] = useState('');
  const [myPost, setMypost] = useState([]);

  console.log(memo);

  const handleChange = (e: any) => {
    setMemo(e.target.value);
  };

  return (
    <div>
      <h1>메모장</h1>

      <Box>
        <Box>내 메모Log</Box>
        <Box>{myPost}</Box>
      </Box>
      <TextField value={memo} onChange={handleChange} />
      <Button>글쓰기</Button>
    </div>
  );
};

export default Main;
