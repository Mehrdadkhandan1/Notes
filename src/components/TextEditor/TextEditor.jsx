import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import './MyResponsiveTextEditor.css'; // فایل استایل (اختیاری)

const TextEditor = ({ handelText }) => {

  const handleChange = (value) => {
    handelText(value)
  };

  return (
    <div className="my-text-editor-container">
      <ReactQuill  onChange={handleChange} className="my-text-editor" />

      {/* شما می‌توانید قسمت‌های دیگر از آرایهٔ ویژگی‌های react-quill را نیز اضافه کنید. */}
    </div>
  );
};

export default TextEditor;
