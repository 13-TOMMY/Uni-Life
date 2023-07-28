import React from 'react'
import ReactDOM from 'react-dom/client'
import FavContextProvider from './contexts/FavContext.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavContextProvider>
      <App />
    </FavContextProvider>
  </React.StrictMode>,
)
