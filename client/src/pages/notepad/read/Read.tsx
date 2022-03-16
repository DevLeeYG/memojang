import { NoteRead, NoteTop } from '../../../makeStyles/MakeNotePad';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { deleteContent, pickListId } from '../../../module/notePad';
import Paper from '../../../components/NoteBook/Paper/Paper';
import { postElement } from '../../../components/Type/Types';

const Read = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = NoteRead();
  const Top = NoteTop();

  const data = useSelector(
    (state: RootStateOrAny) => state.notePadReducer.content,
  );

  const selectId = useSelector(
    (state: RootStateOrAny) => state.notePadReducer.id,
  );
  const userKey = useSelector(
    (state: RootStateOrAny) => state.userReducer.userLogin.id,
  );
  let pickData = data?.filter((postElement: postElement) => {
    return postElement.id === selectId;
  });

  const index = data?.findIndex((el: any) => {
    return el.id === selectId;
  });

  let prevdata = data[index - 1];
  let nextdata = data[index + 1];

  const pickPrev = (prevdataID: any) => {
    dispatch(pickListId(prevdataID));
  };
  const pickNext = (nextdataID: any) => {
    dispatch(pickListId(nextdataID));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteContent({ id, userKey }));
    navigate('/notepad/main');
  };
  const handlePostEdit = () => {
    navigate('/notepad/editpost');
  };

  // const handlePrevData = (id: number) => {
  //   dispatch(pickPrevData(prevdata));
  //   navigate(`/notepad/read/${id}`);
  // };

  // const handleNextData = (id: number) => {
  //   dispatch(pickNextData(nextdata));
  //   navigate(`/notepad/read/${id}`);
  // };

  return (
    <div>
      <div className={classes.Top}>
        <div className={classes.readtitle}>{pickData[0].title}</div>

        <button
          onClick={() => navigate('/notepad/main')}
          className={Top.button}
        >
          <ArrowBackIosIcon />
        </button>
      </div>
      <div className={classes.option}>
        <span>
          <button
            onClick={() => {
              handlePostEdit();
            }}
            className={classes.btn}
          >
            수정
          </button>
        </span>
        <span>
          <button
            onClick={() => handleDelete(pickData[0].id)}
            className={classes.btn}
          >
            삭제
          </button>
        </span>
      </div>
      <div className={classes.body}>
        <div className={classes.inner}>
          <Paper pickText={pickData[0].data} />
        </div>
      </div>

      <div className={classes.readFoot}>
        {nextdata ? (
          <div className={classes.prvNextRead}>
            <i onClick={() => pickNext(nextdata.id)} className={classes.icon}>
              <ArrowCircleLeftIcon fontSize="large" />
            </i>

            <div className={classes.inContent}>
              <p>이전글</p>
              <div className={classes.footTitle}>{nextdata.title}</div>
            </div>
          </div>
        ) : null}
        {prevdata ? (
          <div className={classes.prvNextRead}>
            <div style={{ textAlign: 'right' }} className={classes.inContent}>
              <p>다음 글</p>
              <div className={classes.footTitle}>{prevdata.title}</div>
            </div>
            <i onClick={() => pickPrev(prevdata.id)} className={classes.icon}>
              <ArrowCircleRightIcon fontSize="large" />
            </i>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Read;
