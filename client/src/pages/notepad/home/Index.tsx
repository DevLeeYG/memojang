/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-danger-with-children */
import React, { useEffect } from 'react';
import { NoteHome, NoteTop } from '../../../makeStyles/MakeNotePad';
import { useNavigate } from 'react-router-dom';
import CreateIcon from '@mui/icons-material/Create';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { pickListId, requestList } from '../../../module/notePad';
import axios from 'axios';
import { postElement } from '../../../components/Type/Types';
const Index = () => {
  const userKey = useSelector(
    (state: RootStateOrAny) => state.userReducer.userLogin.id,
  );

  const getLists = () => {
    axios
      .get('http://localhost:8080/notepad/list', {
        params: { userKey: userKey },
      })
      .then((res) => dispatch(requestList(res.data)));
  };

  useEffect(() => {
    getLists();
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector(
    (state: RootStateOrAny) => state.notePadReducer.content,
  );

  const classes = NoteHome();
  const Top = NoteTop();

  const selectList = (id: number) => {
    dispatch(pickListId(id));
    navigate(`/notepad/read/${id}`);
  };

  const list = data.map((listArray: postElement) => {
    let date = new Date(listArray.date);
    return (
      <div
        key={listArray.id}
        onClick={() => selectList(listArray.id)}
        className={classes.list}
      >
        <h2>{listArray.title}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: listArray.data.slice(0, 20) + '...',
          }}
        ></p>

        <div>{`${date.getFullYear()} 년 ${
          date.getMonth() + 1
        }월 ${date.getDate()}일`}</div>
      </div>
    );
  });

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
        <div className={classes.inner}>{list}</div>
      </div>
    </div>
  );
};

export default Index;
