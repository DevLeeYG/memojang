import el from 'date-fns/esm/locale/el/index.js';
import React, { useState } from 'react';
import { NoteBody, NoteTop } from '../../../makeStyles/MakeNotePad';
import BodyIndex from '../notebody/BodyIndex';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
const Topindex = () => {
  const classes = NoteTop();
  const navigate = useNavigate();

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
            placeholder="제목을 입력하세요"
          />
          <i onClick={() => navigate('/notepad')} className={classes.back}>
            <ArrowBackIosIcon />
          </i>
        </div>
      </div>
      <div>
        <BodyIndex />
      </div>
    </>
  );
};

export default Topindex;
