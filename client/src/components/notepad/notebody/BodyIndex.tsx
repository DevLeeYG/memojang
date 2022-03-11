import React, { useState } from 'react';
import aixos from 'axios';
import MainIndex from './main/MainIndex';
import SidebarIndex from './sidebar/SidebarIndex';
import { NoteTop, NoteBody } from '../../../makeStyles/MakeNotePad';
import axios from 'axios';
import { RootStateOrAny, useSelector } from 'react-redux';

const BodyIndex = ({ fontColors }: any) => {
  const userKey = useSelector(
    (state: RootStateOrAny) => state.userReducer.userLogin.id,
  );

  const [text, setText] = useState('');

  const handleWriteSave = () => {
    axios
      .post('http://localhost:8080/notepad/save', {
        userKey,
        text,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const classes = NoteBody();
  const classses = NoteTop();
  return (
    <div>
      <div className={classes.root}>
        <SidebarIndex />
        <MainIndex text={text} setText={setText} />
      </div>
      <div className={classses.right}>
        <button onClick={handleWriteSave} className={classses.button}>
          저장하기
        </button>
        <button className={classses.button}>삭제하기</button>
      </div>
    </div>
  );
};

export default BodyIndex;
