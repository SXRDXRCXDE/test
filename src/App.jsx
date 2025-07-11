import {BrowserRouter, Navigate, Outlet, Route, Routes} from "react-router-dom";
import {MultiLanguageProvider} from "./contexts/MultiLanguageProvider";
import {ThemeProvider} from "./contexts/ThemeContext";
import {AuthProvider} from "./contexts/AuthProvider";
import Login from "./pages/Login/Login.jsx";
import ProtectedRoute from "./layouts/ProtectedRoute.jsx";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./layouts/Layout";
import Products from "./pages/Products/Products";



function App() {


  return (
    <BrowserRouter>
        <MultiLanguageProvider>
            <ThemeProvider>
                <AuthProvider>
                    <Routes>
                        <Route path={`/login`} element={<Login/>} />
                        <Route path="/" element={<ProtectedRoute>
                            <Layout/>
                        </ProtectedRoute>}>
                            <Route index element={<Navigate to="/dashboard" replace />} />
                            <Route path="login" element={<Login />} />
                            <Route path="dashboard" element={<Dashboard />} />
                            <Route path="dashboard/home" element={<Dashboard />} />
                            <Route path="dashboard/education" element={<Products />} />
                        </Route>
                    </Routes>
                </AuthProvider>
            </ThemeProvider>
        </MultiLanguageProvider>
    </BrowserRouter>
  )
}

export default App
