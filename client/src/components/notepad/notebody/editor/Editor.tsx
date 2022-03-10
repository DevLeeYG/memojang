import axios, { AxiosError } from 'axios';
import { useRef, useState, useMemo } from 'react';

//이렇게 라이브러리를 불러와서 사용하면 됩니다
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditorComponent = ({ text, setText }: any) => {
  //   const QuillRef = useRef<ReactQuill>();

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
      <ReactQuill
        value={text}
        onChange={setText}
        modules={modules}
        theme="bubble"
        placeholder="내용을 입력해주세요."
      />
    </>
  );
};

export default EditorComponent;
