import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import TodoList from "../../components/TodoList/TodoList";
import ShowNotes from "../ShowNotes/ShowNotes";
import { Outlet, useParams } from "react-router-dom";
import axios from "axios";
import { ContextNote } from "../../context/context";
import { useAuth } from "../../hooks/useAuth";
// css file 
import './Main.css'

import vector from './../../picture/selectFolder.svg'
const Main = ({ children }) => {
  const { id } = useParams();
  const { state, dispatch } = useContext(ContextNote);
  // auth user 
  const [check, setCheck] = useAuth(JSON.parse(localStorage.getItem("token")));
  function handelErr(err) {
    return { data: { data: [], message: err.message } };
  }
  useEffect(() => {
    const fetchData = async () => {
      // get notes

      const urlNotes = id ? `/api/getFolder/${id}` : '/api/getDefaultFolder'

      if (id) {
        const notes = await axios.get(urlNotes).catch((err) => {
          return { data: { data: [], message: err.message } };
        });
        dispatch({ type: "SET_NOTES", data: notes.data.data });
      }

      // get folders
      const folders = await axios
        .get("/api/getallFolders")
        .catch((err) => handelErr(err));
      dispatch({ type: "SET_FOLDERS", data: folders.data.data });
      // get tags
      const tags = await axios
        .get("/api/getallTags")
        .catch((err) => handelErr(err));
      dispatch({ type: "SET_TAGS", data: tags.data.data });
    };
    if (check) {
      fetchData();
    }
  }, [check, id]);


  return (
    <>
      <div className="main-note">
        {id ?
          <>
            {children}
          </>
          :
          <>
            <div className='selectFolder'>
              <img src={vector} alt="" />
              <p>Please select a folder from the menu</p>
            </div>
          </>
        }

      </div>
    </>
  );
};

export default Main;
