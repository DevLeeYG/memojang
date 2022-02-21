import { Button, TextField, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RootStateOrAny, useSelector } from 'react-redux';
const Main = () => {
  const [memo, setMemo] = useState('');
  const [myPost, setMypost] = useState<any>([]);
  const [memoid, setMemoId] = useState<number>(0);
  const [putPost, setPutPost] = useState<boolean>(false);

  const data = useSelector(
    (state: RootStateOrAny) => state.userReducer.userLogin.username,
  );

  const userKey = useSelector(
    (state: RootStateOrAny) => state.userReducer.userLogin.id,
  );

  useEffect(() => {
    getMyPost();
  }, []);

  const getMyPost = () => {
    axios
      .get(`http://localhost:8080/posts/`, { params: userKey })
      .then((res) => {
        setMypost(res.data.data);
      });
  };

  const postWrite = () => {
    axios
      .post(`http://localhost:8080/write/`, {
        userKey: userKey,
        data: memo,
      })
      .then((res) => {
        if (res.status === 200) getMyPost();
      })
      .catch((err) => console.log(err));
  };

  const deletePost = (id: any) => {
    const d = window.confirm('삭제하시겠습니까?');

    if (d) {
      axios
        .delete(`http://localhost:8080/delete/`, {
          data: { memoId: id },
        })
        .then((res) => {
          if (res.status === 200) getMyPost();
        });
    } else {
      return;
    }
  };

  const list = myPost.map((el: any) => {
    return (
      <Box
        key={el.memo_id}
        sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}
      >
        {putPost ? (
          <>
            <Box sx={{ width: '100%', height: '50px' }}>
              <TextField
                sx={{ width: '100%', height: '50px' }}
                defaultValue={el.data}
              />
            </Box>
            <Button
              onClick={() => setPutPost(true)}
              sx={{ border: '1px solid black', borderRadius: '0px' }}
            >
              수정요청
            </Button>
          </>
        ) : (
          <>
            <Box sx={{ height: '50px', width: '100%' }}>{el.data}</Box>
            <Button
              onClick={() => setPutPost(true)}
              sx={{ border: '1px solid black', borderRadius: '0px' }}
            >
              수정
            </Button>
          </>
        )}

        <Button
          onClick={() => deletePost(el.memo_id)}
          sx={{ border: '1px solid black', borderRadius: '0px' }}
        >
          삭제
        </Button>
      </Box>
    );
  });

  const handleChange = (e: any) => {
    setMemo(e.target.value);
  };

  return (
    <div>
      <h1>메모장</h1>

      <Box>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            height: '100px',
          }}
        >
          내 메모Log
        </Box>
      </Box>
      <Box>{list}</Box>
      <Box
        sx={{
          height: '80px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TextField value={memo} onChange={handleChange} />

        <Button
          onClick={postWrite}
          sx={{
            height: '50px',
            borderRadius: '0px',
            border: '1px solid black',
          }}
        >
          글쓰기
        </Button>
      </Box>
    </div>
  );
};

export default Main;
