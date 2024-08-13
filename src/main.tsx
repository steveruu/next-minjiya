import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import NotFound from './NotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
