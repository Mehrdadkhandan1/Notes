import React, { useContext } from 'react'
import AddNote from './components/AddNote/AddNote'
import ShowNote from './Pages/ShowNote/ShowNote'
import SignUp from './Pages/SignUp/SignUp'
import { Route, Routes } from 'react-router-dom'
import Register from './Pages/SignUp/Register/Register'
import Login from './Pages/SignUp/Login/Login'
import Main from './Pages/Main/Main'
import AddTodo from './components/AddTodo/AddTodo'
import AddFolder from './components/AddFolder/AddFolder'
import Loading from './Loading/Loading'
// context
import { LoadingContext } from './context/context'
import ForgetPasswordPage from './Pages/ForgetPassword/ForgetPasswordPage'
// import ForgetPasswordPage from './Pages/ForgetPassord/ForgetPasswordPage'

const App = () => {
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
