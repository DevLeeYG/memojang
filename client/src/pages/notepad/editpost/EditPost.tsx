import React from 'react';
import Topindex from '../../../components/notepad/noteWrite/Top/BodyTop';
import { useSelector, RootStateOrAny } from 'react-redux';
const EditPost = () => {
  const selectId = useSelector(
    (state: RootStateOrAny) => state.notePadReducer.id,
  );

  const dataPick = useSelector(
    (state: RootStateOrAny) => state.notePadReducer.content,
  );
  const pickData = dataPick.filter((el: any) => {
    return el.id === selectId;
  });

  const { title, data } = pickData[0];

  return (
    <div>
      <Topindex pickdataTitle={title} pickdataData={data} />
    </div>
  );
};

export default EditPost;
