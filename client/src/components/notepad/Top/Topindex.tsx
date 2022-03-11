import el from 'date-fns/esm/locale/el/index.js';
import React, { useState } from 'react';
import { NoteBody, NoteTop } from '../../../makeStyles/MakeNotePad';
import BodyIndex from '../notebody/BodyIndex';

const Topindex = () => {
  const classes = NoteTop();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.left}>메모장</div>
        <div className={classes.right}></div>
      </div>
      <div>
        <BodyIndex />
      </div>
    </>
  );
};

export default Topindex;
