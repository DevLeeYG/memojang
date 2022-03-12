/* eslint-disable react-hooks/exhaustive-deps */
import el from 'date-fns/esm/locale/el/index.js';
import React, { useEffect, useState } from 'react';
import { NoteBody, NoteTop } from '../../../makeStyles/MakeNotePad';
import BodyIndex from '../notebody/BodyIndex';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { requestList } from '../../../module/notePad';
const Topindex = () => {
  const classes = NoteTop();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const dispatch = useDispatch();
  const userKey = useSelector(
    (state: RootStateOrAny) => state.userReducer.userLogin.id,
  );

  const data = useSelector(
    (state: RootStateOrAny) => state.notePadReducer.content,
  );
  console.log(data);

  const getList = () => {
    axios
      .get('http://localhost:8080/notepad/list', {
        params: { userkey: userKey },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(requestList(res.data));
        }
      });
  };

  const onTitleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <div className={classes.root}>
        <div className={classes.right}>
          <input
            style={{
              width: '100%',
              fontSize: '2.5rem',
              height: '70px',
              outline: 'none',
              border: 'none',
            }}
            value={title}
            onChange={onTitleChange}
            placeholder="제목을 입력하세요"
          />
          <i onClick={() => navigate('/notepad')} className={classes.back}>
            <ArrowBackIosIcon />
          </i>
        </div>
      </div>
      <div>
        <BodyIndex title={title} text={text} setText={setText} />
      </div>
    </>
  );
};

export default Topindex;
