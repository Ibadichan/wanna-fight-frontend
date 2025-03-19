import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import './index.css'
import Home from './pages/Home'
import Game from './pages/Game'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Subscription from './pages/Subscription'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
