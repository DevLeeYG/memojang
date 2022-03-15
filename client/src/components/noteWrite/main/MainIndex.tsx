/* eslint-disable @typescript-eslint/no-redeclare */
import { NoteBody } from '../../../makeStyles/MakeNotePad';
import 'react-quill/dist/quill.bubble.css';

import Editor from '../../../components/notepad/noteWrite/editor/Editor';
const MainIndex = ({ text, setText }: any) => {
  const classes = NoteBody();

  return (
    <div className={classes.main}>
      <Editor text={text} setText={setText} />
    </div>
  );
};

export default MainIndex;
