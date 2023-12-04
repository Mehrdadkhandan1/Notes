import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import { ContextNoteProvider, LoadingContextProvider } from './context/context.jsx'
import {  AlertContextProvider } from './components/Alert/Alert.jsx'

// axios contfig

axios.defaults.baseURL = 'http://localhost:3000/'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AlertContextProvider>
      <LoadingContextProvider>
        <ContextNoteProvider>
          <App />
        </ContextNoteProvider>,
      </LoadingContextProvider>
    </AlertContextProvider>
  </BrowserRouter>
)
