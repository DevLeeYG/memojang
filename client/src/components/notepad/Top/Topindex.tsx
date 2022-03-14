/* eslint-disable react-hooks/exhaustive-deps */
import el from 'date-fns/esm/locale/el/index.js';
import React, { useEffect, useState } from 'react';
import { NoteBody, NoteTop } from '../../../makeStyles/MakeNotePad';
import BodyIndex from '../notebody/BodyIndex';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { getList, requestList } from '../../../module/notePad';
const Topindex = () => {
  const classes = NoteTop();
  const navigate = useNavigate();
  const location = useLocation();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const dispatch = useDispatch();
  const userKey = useSelector(
    (state: RootStateOrAny) => state.userReducer.userLogin.id,
  );

  const handleReq = () => {
    dispatch(getList(userKey));
    navigate('/notepad/main');
  };

  const onTitleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTitle(e.target.value);
  };

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
          <i onClick={() => handleReq()} className={classes.back}>
            <ArrowBackIosIcon />
          </i>
        </div>
      </div>
      <div>
        <BodyIndex
          handleReq={handleReq}
          title={title}
          text={text}
          setText={setText}
        />
      </div>
    </>
  );
};

export default Topindex;
