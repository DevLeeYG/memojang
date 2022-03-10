/* eslint-disable @typescript-eslint/no-redeclare */
import React, { useState } from 'react';
import { NoteBody } from '../../../../makeStyles/MakeNotePad';

import 'react-quill/dist/quill.bubble.css';

import Editor from '../editor/Editor';
const MainIndex = () => {
  const classes = NoteBody();
  const [text, setText] = useState('');

  return (
    <div className={classes.main}>
      <Editor text={text} setText={setText} />
    </div>
  );
};

export default MainIndex;
