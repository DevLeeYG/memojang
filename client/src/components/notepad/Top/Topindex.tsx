import el from 'date-fns/esm/locale/el/index.js';
import React, { useState } from 'react';
import { NoteBody, NoteTop } from '../../../makeStyles/MakeNotePad';
import BodyIndex from '../notebody/BodyIndex';

const Topindex = () => {
  const [fontColors, setFontColors] = useState('');
  const [fontSize, setFontSize] = useState(0);

  const onChangeValue = (e: any) => {
    setFontColors(e.target.value);
  };

  const onChangeSize = (e: any) => {
    setFontSize(e.target.value);
  };

  const classes = NoteTop();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.left}>메모장</div>
        <div className={classes.right}>
          <button className={classes.button}>저장하기</button>
          <button className={classes.button}>삭제하기</button>
        </div>
      </div>
      <div>
        <BodyIndex fontColors={fontColors} />
      </div>
    </>
  );
};

export default Topindex;
