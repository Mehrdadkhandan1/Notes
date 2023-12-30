import React, { useContext, useEffect } from 'react'
import AddNote from './components/AddNote/AddNote'
import ShowNote from './Pages/ShowNote/ShowNote'
import SignUp from './Pages/SignUp/SignUp'
import { Route, Routes, json } from 'react-router-dom'
import Register from './Pages/SignUp/Register/Register'
import Login from './Pages/SignUp/Login/Login'
import Main from './Pages/Main/Main'
import AddTodo from './components/AddTodo/AddTodo'
import AddFolder from './components/AddFolder/AddFolder'
import Loading from './Loading/Loading'
// context
import { ContextNote, LoadingContext } from './context/context'
import ForgetPasswordPage from './Pages/ForgetPassword/ForgetPasswordPage'
import axios from 'axios'
import { useAuth } from './hooks/useAuth'
const App = () => {
  const { state, dispatch } = useContext(ContextNote)
  // check token
  const [check] = useAuth(JSON.parse(localStorage.getItem('token')))
  useEffect(() => {
    async function fetchTodo() {
      // get Todos
      if (check) {
        const todos = await axios.get('/api/getallTodos').catch(err => handelErr(err))
        dispatch({ type: 'SET_TODOS', data: todos.data.data })
      }
    }
    fetchTodo()
  }, [localStorage.getItem('token'), check])
  const { open } = useContext(LoadingContext)
  return (
    <div className="layout">
      <Routes>
        {/* register routes */}
        <Route path="/signup" element={<SignUp />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="forgetPassword" element={<ForgetPasswordPage />} />
        </Route>

        <Route path="showNote/:id" element={<ShowNote />}>
          <Route path="addtodo" element={<AddTodo />} />
        </Route>

        <Route path="/" element={<Main />}>
          <Route path="addnote" element={<AddNote />} />
          <Route path="addtodo" element={<AddTodo />} />
          <Route path="addfolder" element={<AddFolder title={"Folder"} />} />
          <Route path="addtag" element={<AddFolder title={"Tag"} />} />
        </Route>
      </Routes>

      {open && <Loading />}
    </div>
  );
};

export default App;
