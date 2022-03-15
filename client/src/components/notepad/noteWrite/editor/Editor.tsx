import { useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditorComponent = ({ pickText, text, setText }: any) => {
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
    <>
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
    </>
  );
};

export default EditorComponent;
