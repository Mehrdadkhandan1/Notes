import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Input from "../Input/Input";
import SubmitBtn from "../SubmitBtn";
import Overlay from "../OverLay/OverLay";
import { Link, useNavigate } from "react-router-dom";
import style from "./AddFolder.module.css";
import axios from "axios";
import { useContext } from "react";
import { ContextNote, LoadingContext } from "../../context/context";
import { AlertContext } from "../Alert/Alert";
// title = tag or Folder
const AddFolder = ({ title }) => {
  // context note
  const { state, dispatch } = useContext(ContextNote);
  // loading
  const { changeStatus } = useContext(LoadingContext);
  // Title
  const [name, setName] = useState("");
  // Notif
  const { showAlert } = useContext(AlertContext);
  // navigate
  const navigate = useNavigate();

  // change value input
  const changeValue = (e) => {
    const value = e.target.value;
    setName(value);
  };
  console.log(title)

    // submit form
    const addFolder = (e) => {
        // stop submit
        e.preventDefault()
        // show sppiner  
        changeStatus()
        const data = title === 'Folder' ? { title: name } : { title: name }
        console.log(title)
        axios.post(`/api/add${title}`, data).then(resp => {
            console.log(resp)
            if (resp.status === 200) {
                if (title === 'Folder') {
                    const copyState = state.folders
                    copyState.push(resp.data.data)
                    console.log(copyState)
                    dispatch({ type: 'SET_FOLDERS', data: copyState })
                }
                else {
                    const copyState = state.tags
                    dispatch({ type: 'SET_TAGS', data: copyState })
                }



          // stop sppiner
          changeStatus();
          // go to home page
          navigate("/");
          // alert success
          return showAlert("success", `${title} adedd`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Overlay>
      <div className={style.addFolder}>
        <div className={style.header}>
          <h3>Add {title} :</h3>
          <Link to=".." relative="path" className={style.closeWindow}>
            {" "}
            <IoClose />{" "}
          </Link>
        </div>
        <div className={style.formData}>
          <form onSubmit={addFolder} className={style.form}>
            <Input
              type="text"
              value={name}
              change={changeValue}
              label="Title (require) :"
              htmlFor="title"
            />
            <div className={style.btnAdd}>
              <SubmitBtn> Add {title} </SubmitBtn>
            </div>
          </form>
        </div>
      </div>
    </Overlay>
  );
};

export default AddFolder;
