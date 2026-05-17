import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Community from './pages/Community.jsx'
import Cfp from './pages/Cfp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/community" element={<Community />} />
        <Route path="/cfp" element={<Cfp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)


