import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ShowNotes from './Pages/ShowNotes/ShowNotes'
import TodoList from './components/TodoList/TodoList'
import Overlay from './components/OverLay/OverLay'
import AddNote from './components/AddNote/AddNote'

const App = () => {
  return (
    <div className='layout'>
      <Navbar />
      <div className='main-note'>
        <ShowNotes />
      </div>
      <TodoList />
      <Overlay>
        <AddNote />
      </Overlay>
    </div>
  )
}

export default App
