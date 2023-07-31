import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './style/index.css'
import { BrowserRouter } from 'react-router-dom'
import ShowCaseContextProvider from './context/ShowCaseContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ShowCaseContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShowCaseContextProvider>
  </React.StrictMode>,
)
