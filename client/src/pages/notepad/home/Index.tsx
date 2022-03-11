import React from 'react';
import { NoteHome, NoteTop } from '../../../makeStyles/MakeNotePad';
import { useNavigate } from 'react-router-dom';
import CreateIcon from '@mui/icons-material/Create';
const Index = () => {
  const navigate = useNavigate();

  const classes = NoteHome();
  const Top = NoteTop();

  return (
    <div>
      <div className={classes.Top}>
        <div></div>
        <button
          onClick={() => navigate('/notepad/write')}
          className={Top.button}
        >
          <CreateIcon />
        </button>
      </div>
      <div className={classes.body}>
        <div className={classes.inner}>
          <div
            onClick={() => navigate('/notepad/read')}
            className={classes.list}
          >
            <h2>타이틀</h2>
            <p>내용</p>
            <div>2022-3-11</div>
          </div>
          <div
            onClick={() => navigate('/notepad/read')}
            className={classes.list}
          >
            <h2>타이틀</h2>
            <p>내용</p>
            <div>2022-3-11</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
