import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GameProvider } from './context/Game/GameProvider'
import { ThemeProvider } from './context/Theme/ThemeProvider'
import 'animate.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <GameProvider>
        <App />
      </GameProvider>
    </ThemeProvider>
  </React.StrictMode>
)
