
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Login } from '../pages/Login/index.jsx'
import { Register } from '../pages/Register/index.jsx'
import { Feed } from '../pages/Feed/index.jsx'
import { BlogPost } from '../pages/BlogPost/index.jsx'
import { ProtectedRoute } from '../components/ProtectedRoute/index.jsx'
import { AuthLayout } from '../layouts/Auth/index.jsx'
import { AppLayout } from '../layouts/App/index.jsx'
import { NotFound } from '../pages/NotFound/index.jsx'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={
                        <ProtectedRoute>
                            <Feed />
                        </ProtectedRoute>
                    } />
                    <Route path="blog-post/:slug" element={
                        <ProtectedRoute>
                            <BlogPost />
                        </ProtectedRoute>
                    } />
                </Route>
                <Route path="/auth" element={<AuthLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )

}