import React from 'react';
import MainIndex from './main/MainIndex';
import SidebarIndex from './sidebar/SidebarIndex';
import { NoteBody } from '../../../makeStyles/MakeNotePad';
const BodyIndex = ({ fontColors }: any) => {
  const classes = NoteBody();
  return (
    <div className={classes.root}>
      <SidebarIndex />
      <MainIndex fontColors={fontColors} />
    </div>
  );
};

export default BodyIndex;
