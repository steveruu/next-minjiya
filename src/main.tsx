import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import NotFound from './NotFound'
import Branding from './Branding'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
