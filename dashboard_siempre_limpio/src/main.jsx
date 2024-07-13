import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router_Provider } from './routes/RoutesProvider'
import GlobalProvider from './contexts/globalContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalProvider>
    <Router_Provider />
  </GlobalProvider>
)
