import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({ handelText, content }) => {
  console.log(content)
  const handleChange = (value, delta, source, editor) => {
    console.log(editor.getText().trim())
    if (editor.getText().trim() === '') {
      handelText('')
    } else {
      handelText(value)
    }
  };

  return (
    <div className="my-text-editor-container">
      <ReactQuill value={content && content} onChange={handleChange} className="my-text-editor" />
    </div>
  );
};

export default TextEditor;
