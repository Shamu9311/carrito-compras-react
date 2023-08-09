import React from 'react'
import ReactDOM from 'react-dom/client'
import { CarritoApp } from './CarritoApp.tsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <CarritoApp />
    </React.StrictMode>,
  </BrowserRouter>
)
