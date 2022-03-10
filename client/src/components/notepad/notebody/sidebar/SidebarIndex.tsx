import React from 'react';
import { NoteBody } from '../../../../makeStyles/MakeNotePad';
const SidebarIndex = () => {
  const classes = NoteBody();

  return <div className={classes.sidebar}></div>;
};

export default SidebarIndex;
