import { NoteRead, NoteTop } from '../../../makeStyles/MakeNotePad';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { deleteContent } from '../../../module/notePad';
import MainIndex from '../../../components/notepad/noteWrite/main/MainIndex';

const Read = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector(
    (state: RootStateOrAny) => state.notePadReducer.content,
  );

  const selectId = useSelector(
    (state: RootStateOrAny) => state.notePadReducer.id,
  );
  const userKey = useSelector(
    (state: RootStateOrAny) => state.userReducer.userLogin.id,
  );

  const handleDelete = (id: number) => {
    dispatch(deleteContent({ id, userKey }));
    navigate('/notepad/main');
  };
  const handlePostEdit = () => {
    navigate('/notepad/editpost');
  };

  const classes = NoteRead();
  const Top = NoteTop();

  const pickData = data?.filter((el: any) => {
    return el.id === selectId;
  });

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
          <MainIndex pickText={pickData[0].data} />
        </div>
      </div>

      <div className={classes.readFoot}>
        <div className={classes.prvNextRead}>
          <i className={classes.icon}>
            <ArrowCircleLeftIcon fontSize="large" />
          </i>

          <div className={classes.inContent}>
            <p>이전글</p>
            <h3>a</h3>
          </div>
        </div>

        <div className={classes.prvNextRead}>
          <div style={{ textAlign: 'right' }} className={classes.inContent}>
            <p>다음 글</p>
            <h3>a</h3>
          </div>
          <i className={classes.icon}>
            <ArrowCircleRightIcon fontSize="large" />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Read;
