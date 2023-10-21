import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { FlightProvider } from './context/SpaceFlighProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FlightProvider>
    <App />
    </FlightProvider>
  </React.StrictMode>,
)
