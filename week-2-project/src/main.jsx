import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App.jsx'
import { Videos } from './pages/Videos.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/videos" element={<Videos />} />
        </Route>
      </Routes>
    </BrowserRouter>
</StrictMode>
)


