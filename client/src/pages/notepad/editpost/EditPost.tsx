import React from 'react';
import Write from '../write/Write';
import { useSelector, RootStateOrAny } from 'react-redux';
import { postElement } from '../../../components/Type/Types';
const EditPost = () => {
  const selectId = useSelector(
    (state: RootStateOrAny) => state.notePadReducer.id,
  );

  const dataPick = useSelector(
    (state: RootStateOrAny) => state.notePadReducer.content,
  );
  const pickData = dataPick.filter((postElement: postElement) => {
    return postElement.id === selectId;
  });

  const { title, data }: { title: string; data: string } = pickData[0];

  return (
    <div>
      <Write pickdataTitle={title} pickdataData={data} />
    </div>
  );
};

export default EditPost;
