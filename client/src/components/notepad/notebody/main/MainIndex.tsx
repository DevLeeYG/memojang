import React from 'react';
import { NoteBody } from '../../../../makeStyles/MakeNotePad';
const MainIndex = ({ fontColors }: any) => {
  const classes = NoteBody();

  const style = {
    width: '100vh',
    height: '90vh',
    color: '',
  };
  style.color = fontColors;

  return (
    <div className={classes.main}>
      <textarea style={style}></textarea>
    </div>
  );
};

export default MainIndex;
