import React, { useState } from 'react';
import MainIndex from './main/MainIndex';
import { NoteTop, NoteBody } from '../../../makeStyles/MakeNotePad';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { writeSave } from '../../../module/notePad';

import { useNavigate } from 'react-router-dom';
const BodyIndex = ({ handleReq, title, text, setText }: any) => {
  const navigate = useNavigate();
  const [date] = useState<Date>(new Date());

  const dispatch = useDispatch();
  const classes = NoteBody();
  const classses = NoteTop();
  const userKey = useSelector(
    (state: RootStateOrAny) => state.userReducer.userLogin.id,
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const reqData = () => {
    dispatch(writeSave({ userKey, title, text, date }));
    navigate('/notepad/main');
    handleReq();
  };

  return (
    <div>
      <div className={classes.root}>
        <MainIndex text={text} setText={setText} />
      </div>
      <div className={classses.writeFoot}>
        <button onClick={reqData} className={classses.button}>
          저장하기
        </button>
      </div>
    </div>
  );
};

export default BodyIndex;
