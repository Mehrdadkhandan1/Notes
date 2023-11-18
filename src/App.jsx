import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ShowNotes from './Pages/ShowNotes/ShowNotes'
import TodoList from './components/TodoList/TodoList'
import Overlay from './components/OverLay/OverLay'
import AddNote from './components/AddNote/AddNote'
import ShowNote from './Pages/ShowNote/ShowNote'
import SignUp from './Pages/SignUp/SignUp'
import { Route, Routes } from 'react-router-dom'
import Register from './Pages/SignUp/Register/Register'
import Login from './Pages/SignUp/Login/Login'
import Main from './Pages/Main/Main'
import AddTodo from './components/AddTodo/AddTodo'

const App = () => {
  return (
    <div className='layout'>
      <Routes >
        {/* register routes */}
        <Route path='/signup' element={<SignUp />}>
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
        </Route >

        <Route path='showNote' element={<ShowNote />}>
          <Route path='addtodo' element={<AddTodo />} />
        </Route>
        <Route path='/' element={<Main />}>
          <Route path='addnote' element={<AddNote />} />
          <Route path='addtodo' element={<AddTodo />} />

        </Route>

      </Routes>



    </div>
  )
}

export default App
