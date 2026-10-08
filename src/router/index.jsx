import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/index.jsx";
import { Register } from "../pages/Register/index.jsx";
import { Feed } from "../pages/Feed/index.jsx";
import { BlogPost } from "../pages/BlogPost/index.jsx";
// import { ProtectedRoute } from "../components/ProtectedRoute/index.jsx";
import { AuthLayout } from "../layouts/Auth/index.jsx";
import { AppLayout } from "../layouts/App/index.jsx";
import { NotFound } from "../pages/NotFound/index.jsx";
import { Logout } from "../pages/Logout/index.jsx"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path='logout' element={<Logout />} />
        </Route>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Feed />} />
          <Route path="blog-post/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
