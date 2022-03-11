import React from 'react';
import { NoteBody } from '../../../../makeStyles/MakeNotePad';
const SidebarIndex = () => {
  const classes = NoteBody();

  return (
    <div className={classes.sidebar}>
      <div className={classes.list}>
        <div className={classes.listT}>테스트입니다</div>
        <div className={classes.listB}>2022-03-10</div>
      </div>
      <div className={classes.list}>
        <div className={classes.listT}>테스트입니다</div>
        <div className={classes.listB}>2022-03-10</div>
      </div>
      <div className={classes.list}>
        <div className={classes.listT}>테스트입니다</div>
        <div className={classes.listB}>2022-03-10</div>
      </div>
      <div className={classes.list}>
        <div className={classes.listT}>테스트입니다</div>
        <div className={classes.listB}>2022-03-10</div>
      </div>
    </div>
  );
};

export default SidebarIndex;
