import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DataStoreProvider } from './Context/DataStoreContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <DataStoreProvider>
    <App />
  </DataStoreProvider>
  // </React.StrictMode>,
)
