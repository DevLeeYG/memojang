import React, { useEffect } from 'react';
import { NoteRead, NoteTop } from '../../../makeStyles/MakeNotePad';
import { useNavigate, useLocation } from 'react-router-dom';
import CreateIcon from '@mui/icons-material/Create';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
const Read = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const classes = NoteRead();
  const Top = NoteTop();

  useEffect(() => {});

  return (
    <div>
      <div className={classes.Top}>
        <div className={classes.readtitle}>제목</div>

        <button onClick={() => navigate('/notepad')} className={Top.button}>
          <ArrowBackIosIcon />
        </button>
      </div>
      <div className={classes.option}>
        <span>수정</span>
        <span>삭제</span>
      </div>
      <div className={classes.body}>
        <div className={classes.inner}></div>
      </div>

      <div className={classes.readFoot}>
        <div className={classes.prvNextRead}>
          <i className={classes.icon}>
            <ArrowCircleLeftIcon fontSize="large" />
          </i>
          <div className={classes.inContent}>
            <p>이전글</p>
            <h3>제목</h3>
          </div>
        </div>
        <div className={classes.prvNextRead}>
          <div style={{ textAlign: 'right' }} className={classes.inContent}>
            <p>다음 글</p>
            <h3>제목</h3>
          </div>
          <i className={classes.icon}>
            <ArrowCircleRightIcon fontSize="large" />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Read;
