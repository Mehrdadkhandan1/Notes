import React, { useContext, useEffect, useState } from "react";
import style from "./addNote.module.css";
import { IoClose } from "react-icons/io5";
import Input from "../Input/Input";
import DropDownInput from "../dropDownInput/dropDownInput";
import SubmitBtn from "../SubmitBtn";
import Overlay from "../OverLay/OverLay";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ContextNote, LoadingContext } from "../../context/context";

const AddNote = () => {
  const { state, dispatch } = useContext(ContextNote);
  const { changeStatus } = useContext(LoadingContext);
  // form data
  const [dataForm, setDataForm] = useState({
    title: "",
    folderId: "",
    tags: [],
    todos: [],
  });
  //  folders and tags
  const [folder_Tag, setFolder_tag] = useState({
    allFolders: [],
    allTags: [],
  });
  // get folders and tags from state
  useEffect(() => {
    const folders = state.folders;
    const tags = state.tags;

    const allFolders = [];
    const allTags = [];
    folders.map((option) => {
      allFolders.push({ value: option._id, label: option.title });
    });

    tags.map((option) => {
      allTags.push({ value: option._id, label: option.title });
    });

    setFolder_tag({
      allFolders,
      allTags,
    });
  }, [state]);

  // function OnChange folder and tags
  const changeOptions = (type, data) => {
    console.log(data);

    setDataForm((prev) => {
      return {
        ...prev,
        [type]: data,
      };
    });
  };

  // function OnChange input
  const setTitle = (e) => {
    setDataForm((prev) => {
      return {
        ...prev,
        title: e.target.value,
      };
    });
  };
  // Navigate
  const navigate = useNavigate();
  // submited Form
  const addNote = (e) => {
    // show loading
    e.preventDefault();
    changeStatus();
    axios.post("/api/addNote", dataForm).then((resp) => {
      if (resp.status === 200) {
        // close loading
        changeStatus();
        navigate(`/showNote/${resp.data.data._id}`);
      }
    });
  };

  console.log(dataForm);
  return (
    <Overlay>
      <div className={style.addNote}>
        <div className={style.headerAddNote}>
          <h3>Add Note :</h3>
          <Link to="/" className={style.closeWindow}>
            {" "}
            <IoClose />{" "}
          </Link>
        </div>
        <div className={style.formData}>
          <form onSubmit={addNote} className={style.formAddNote}>
            <Input
              label="Title (require) :"
              name="title"
              type="text"
              change={setTitle}
              value={dataForm.title}
            />

            <DropDownInput
              type="folder"
              changeValue={changeOptions}
              value={folder_Tag.allFolders}
              labelInput="Add Folder :"
            />
            <DropDownInput
              type="tags"
              changeValue={changeOptions}
              value={folder_Tag.allTags}
              isMulti
              labelInput="Add Tags :"
            />
            <div className={style.btnAdd}>
              <SubmitBtn> Add note </SubmitBtn>
            </div>
          </form>
        </div>
      </div>
    </Overlay>
  );
};

export default AddNote;
