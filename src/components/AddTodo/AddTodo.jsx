import React, { useContext, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Input from "../Input/Input";
import DropDownInput from "../dropDownInput/dropDownInput";
import SubmitBtn from "../SubmitBtn";
import TextEditor from "../TextEditor/TextEditor";
import Overlay from "../OverLay/OverLay";
import { Link, useNavigate } from "react-router-dom";

import style from "./addTodo.module.css";
import axios from "axios";
import { ContextNote, LoadingContext } from "../../context/context";

const AddTodo = () => {
  const [dataTodo, setDataTodo] = useState({
    title: "",
    isCompleted: false,
    noteId: "",
  });
  // all notes in dropdown
  const [notes, setNotes] = useState([]);
  // navigation
  const navigate = useNavigate();

  // context
  const { state, dispatch } = useContext(ContextNote);
  const { changeStatus } = useContext(LoadingContext);

  useEffect(() => {
    // get notes
    
    const allNotes = async () => {
      let notesArr = [];  
     const req =  await axios.get('/api/getallNotes')
      console.log(notes)
      req.data.data.map((note) => {
        notesArr.push({
          label: note.title,
          value: note._id,
        });
      });
      // set state
      setNotes(notesArr);
    }

    allNotes()


  }, [state]);

  // add todo
  const submitedForm = (e) => {
    e.preventDefault();
    const formRequst = {
      title: dataTodo.title,
      isCompleted: dataTodo.isCompleted,
    };

    //   noteId: dataTodo.noteId,
    if (dataTodo.noteId !== "") {
      formRequst.noteId = dataTodo.noteId;
    }
    // show Loading
    changeStatus();
    axios
      .post("/api/addTodo", formRequst)
      .then((resp) => {
        console.log(resp);
        if (resp.status === 201) {
          dispatch({ type: "ADD_TODO", data: resp.data.data });
          // hide loading
          changeStatus();
          navigate("..", { relative: true })
        }
      })
      .catch((err) => {
        console.log(err);
        changeStatus();
      });
  };

  // change value title
  const changeTitle = (e) => {
    setDataTodo((prev) => {
      return {
        ...prev,
        title: e.target.value,
      };
    });
  };
  // select note from dropdown
  const selectNote = (type, value) => {
    setDataTodo((prev) => {
      return {
        ...prev,
        noteId: value,
      };
    });
  };

  return (
    <Overlay>
      <div className={style.addTodo}>
        <div className={style.header}>
          <h3>Add todo :</h3>
          <Link to=".." relative="path" className={style.closeWindow}>
            {" "}
            <IoClose />{" "}
          </Link>
        </div>
        <div className={style.formData}>
          <form onSubmit={submitedForm} className={style.form}>
            <Input
              type="text"
              change={changeTitle}
              value={dataTodo.title}
              label="Title (requier) :"
              htmlFor="title"
            />
            <DropDownInput
              type="Notes"
              changeValue={selectNote}
              labelInput="Select Note :"
              value={notes}
            />
            <div className={style.btnAdd}>
              <SubmitBtn> Add todo </SubmitBtn>
            </div>
          </form>
        </div>
      </div>
    </Overlay>
  );
};

export default AddTodo;
