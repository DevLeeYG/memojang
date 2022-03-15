import { NoteRead, NoteTop } from '../../../makeStyles/MakeNotePad';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { deleteContent } from '../../../module/notePad';

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

  const classes = NoteRead();
  const Top = NoteTop();

  const pickData = data.filter((el: any) => {
    return el.id === selectId;
  });

  const pick = pickData.map((el: any) => {
    return (
      <div key={el.id}>
        <div className={classes.Top}>
          <div className={classes.readtitle}>{el.title}</div>

          <button onClick={() => navigate('/notepad')} className={Top.button}>
            <ArrowBackIosIcon />
          </button>
        </div>
        <div className={classes.option}>
          <span>
            <button className={classes.btn}>수정</button>
          </span>
          <span>
            <button onClick={() => handleDelete(el.id)} className={classes.btn}>
              삭제
            </button>
          </span>
        </div>
        <div className={classes.body}>
          <div
            dangerouslySetInnerHTML={{
              __html: el.data,
            }}
            className={classes.inner}
          ></div>
        </div>

        <div className={classes.readFoot}>
          <div className={classes.prvNextRead}>
            <i className={classes.icon}>
              <ArrowCircleLeftIcon fontSize="large" />
            </i>
            <div className={classes.inContent}>
              <p>이전글</p>
              <h3>제목</h3>
            </div>
          </div>
          <div className={classes.prvNextRead}>
            <div style={{ textAlign: 'right' }} className={classes.inContent}>
              <p>다음 글</p>
              <h3>제목</h3>
            </div>
            <i className={classes.icon}>
              <ArrowCircleRightIcon fontSize="large" />
            </i>
          </div>
        </div>
      </div>
    );
  });

  return <>{pick}</>;
};

export default Read;
