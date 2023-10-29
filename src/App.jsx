import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ShowNotes from './Pages/ShowNotes/ShowNotes'

const App = () => {
  return (
    <div className='layout'>
      <Navbar />
      <div className='main-note'>
        <ShowNotes />
      </div>
    </div>
  )
}

export default App
