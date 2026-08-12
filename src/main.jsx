import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Login } from './pages/Login/index.jsx'
import { Register } from './pages/Register/index.jsx'
import { Feed } from './pages/Feed/index.jsx'
import { BlogPost } from './pages/BlogPost/index.jsx'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          < Route path="/" >
            < Route path="" element={
              <ProtectedRoute>
                <Feed />
              </ProtectedRoute>
              } />
            < Route path="blog-post/:slug" element={
              <ProtectedRoute>
                <BlogPost />
              </ProtectedRoute>
            } />

          </Route>

          < Route path="/auth">
                < Route path="login" element={<Login />} />
                < Route path="register" element={<Register />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
