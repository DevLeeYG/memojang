import el from 'date-fns/esm/locale/el/index.js';
import React, { useState } from 'react';
import { NoteBody, NoteTop } from '../../../makeStyles/MakeNotePad';
import BodyIndex from '../notebody/BodyIndex';
import { fontColor } from './Source';

const Topindex = () => {
  const [fontColors, setFontColors] = useState('');

  const onChangeValue = (e: any) => {
    setFontColors(e.target.value);
  };
  const fontColorChange = fontColor.map((el) => {
    return (
      <>
        <option key={el.id} value={el.color}>
          {el.Title}
        </option>
      </>
    );
  });

  const classes = NoteTop();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.left}>메모장</div>
        <div className={classes.right}>
          <div>
            <select className={classes.colorChange} onChange={onChangeValue}>
              <option value="black">색상</option>
              {fontColorChange}
            </select>
          </div>
          <div>
            <select className={classes.colorChange} onChange={onChangeValue}>
              <option value="black">폰트</option>
              {fontColorChange}
            </select>
          </div>
        </div>
      </div>
      <div>
        <BodyIndex fontColors={fontColors} />
      </div>
    </>
  );
};

export default Topindex;
