/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState } from 'react';
import { NoteTop } from '../../../makeStyles/MakeNotePad';
import BodyIndex from '.././../../components/notepad/noteWrite/Footer/BodyFooter';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

const Write = ({ pickdataTitle, pickdataData }: any) => {
  const classes = NoteTop();
  const navigate = useNavigate();

  const [title, setTitle] = useState(pickdataTitle ? pickdataTitle : '');
  const [text, setText] = useState(pickdataData ? pickdataData : '');

  const handleReq = () => {
    navigate('/notepad/main');
  };

  const onTitleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTitle(e.target.value);
  };

  return (
    <div>
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
    </div>
  );
};

export default Write;
