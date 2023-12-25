import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import { ContextNoteProvider, LoadingContextProvider } from './context/context.jsx'
import { AlertContextProvider } from './components/Alert/Alert.jsx'

// axios contfig

axios.defaults.baseURL = 'http://localhost:3000/'

axios.interceptors.request.use((request)=>{
  request.headers.token = JSON.parse(localStorage.getItem('token'))
  return request
})


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
