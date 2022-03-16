/* eslint-disable no-lone-blocks */
import Paper from './Paper/Paper';
import { NoteTop, NoteBody } from '../../makeStyles/MakeNotePad';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { requestEditPost, writeSave } from '../../module/notePad';
import { useLocation } from 'react-router-dom';
import { noteBookProps } from '../Type/Types';

const NoteBook = ({ handleReq, title, text, setText }: noteBookProps) => {
  const date: Date = new Date();
  const location = useLocation();
  const dispatch = useDispatch();
  const classes = NoteBody();
  const classses = NoteTop();
  const path = location.pathname;

  const selectId: number = useSelector(
    (state: RootStateOrAny) => state.notePadReducer.id,
  );

  const userKey: number = useSelector(
    (state: RootStateOrAny) => state.userReducer.userLogin.id,
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const reqData = () => {
    dispatch(writeSave({ userKey, title, text, date }));

    handleReq();
  };

  const editData = () => {
    requestEditPost({ userKey, title, text, selectId });

    handleReq();
  };

  return (
    <div>
      <div className={classes.root}>
        <Paper text={text} setText={setText} />
      </div>
      <div className={classses.writeFoot}>
        {path === '/notepad/editpost' ? (
          <button onClick={editData} className={classses.button}>
            수정하기
          </button>
        ) : (
          <button onClick={reqData} className={classses.button}>
            저장하기
          </button>
        )}
      </div>
    </div>
  );
};

export default NoteBook;
