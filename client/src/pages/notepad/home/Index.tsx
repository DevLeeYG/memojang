/* eslint-disable react/no-danger-with-children */
import React, { useEffect, useState } from 'react';
import { NoteHome, NoteTop } from '../../../makeStyles/MakeNotePad';
import { useNavigate, useLocation } from 'react-router-dom';
import CreateIcon from '@mui/icons-material/Create';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { getList, pickListId, requestList } from '../../../module/notePad';
import axios from 'axios';
const Index = () => {
  const userKey = useSelector(
    (state: RootStateOrAny) => state.userReducer.userLogin.id,
  );

  const getListss = () => {
    axios
      .get('http://localhost:8080/notepad/list', {
        params: { userKey: userKey },
      })
      .then((res) => dispatch(requestList(res.data)));
  };

  useEffect(() => {
    getListss();
  }, []);

  const [selectData, setSelectData] = useState<number>(0);
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

  const list = data.map((listArray: any) => {
    return (
      <div
        key={listArray.id}
        onClick={() => selectList(listArray.id)}
        className={classes.list}
      >
        <h2>{listArray.title}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: listArray.data.slice(0, 5),
          }}
        ></p>

        <div>2022-3-11</div>
      </div>
    );
  });
  return (
    <div>
      <div className={classes.Top}>
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
