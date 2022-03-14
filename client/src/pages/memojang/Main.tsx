import { Button, TextField, Box } from '@mui/material';
import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Book from '../accountBook/Book';
const Main = () => {
  const [memo, setMemo] = useState('');
  const [myPost, setMypost] = useState<any>([]);
  const [memoid, setMemoId] = useState<number>(0);
  const [insertData, setInsertData] = useState('');

  const username = useSelector(
    (state: RootStateOrAny) => state.userReducer.userLogin.username,
  );

  const userKey = useSelector(
    (state: RootStateOrAny) => state.userReducer.userLogin.id,
  );

  const getMyPost = useCallback(() => {
    axios
      .get(`http://localhost:8080/posts/`, { params: userKey })
      .then((res) => {
        setMypost(res.data.data);
      });
  }, [userKey]);

  const postWrite = () => {
    axios
      .post(`http://localhost:8080/write/`, {
        userKey: userKey,
        data: memo,
        tp: 0,
      })
      .then((res) => {
        if (res.status === 200) getMyPost();
        setMemo('');
      })
      .catch((err) => console.log(err));
  };

  const deletePost = (id: number) => {
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

  const updateReq = (id: any) => {
    axios
      .post(`http://localhost:8080/reqput/`, {
        memoid: id,
      })
      .then(() => {
        getMyPost();
      });
  };

  const setData = (id: any) => {
    axios
      .post(`http://localhost:8080/insert/`, {
        memoid: id,
        data: insertData,
      })
      .then((res) => {
        if (res.status === 200) {
          getMyPost();
          setInsertData('');
        }
      });
  };

  const dataChange = (e: any) => {
    setInsertData(e.target.value);
  };

  const cancleInsert = (id: any) => {
    axios
      .post(`http://localhost:8080/insertcancle`, {
        id: id,
      })
      .then((res) => {
        if (res.status === 200) {
          getMyPost();
        }
      });
  };

  useEffect(() => {
    getMyPost();
  }, [getMyPost]);

  const list = myPost.map((el: any) => {
    return (
      <Box
        key={el.memo_id}
        sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}
      >
        {el.tp === 1 ? (
          <>
            <Box sx={{ width: '100%', height: '50px' }}>
              <TextField
                value={insertData}
                onChange={dataChange}
                sx={{ width: '100%', height: '50px' }}
              />
            </Box>
            <Button
              onClick={() => setData(el.memo_id)}
              sx={{ border: '1px solid black', borderRadius: '0px' }}
            >
              변경하기
            </Button>
            <Button
              onClick={() => cancleInsert(el.memo_id)}
              sx={{ border: '1px solid black', borderRadius: '0px' }}
            >
              취소
            </Button>
          </>
        ) : (
          <>
            <Box sx={{ height: '50px', width: '100%' }}>{el.data}</Box>
            <Button
              onClick={() => updateReq(el.memo_id)}
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
      <Box>
        <div>{username}님 환영합니다*</div>
        <Link to="/accountBook">가계부</Link>
      </Box>
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
