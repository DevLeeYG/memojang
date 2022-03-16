/* eslint-disable @typescript-eslint/no-redeclare */
import { NoteBody } from '../../../makeStyles/MakeNotePad';
import 'react-quill/dist/quill.bubble.css';
import { useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Paper = ({ pickText, text, setText }: any) => {
  const classes = NoteBody();

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ size: ['small', false, 'large', 'huge'] }, { color: [] }],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
            { align: [] },

            [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ],
        ],
      },
    }),
    [],
  );

  return (
    <div className={classes.main}>
      {pickText ? (
        <ReactQuill
          readOnly
          value={pickText}
          onChange={setText}
          modules={modules}
          theme="bubble"
          placeholder="내용을 입력해주세요."
        />
      ) : (
        <ReactQuill
          value={text}
          onChange={setText}
          modules={modules}
          theme="bubble"
          placeholder="내용을 입력해주세요."
        />
      )}
    </div>
  );
};

export default Paper;
