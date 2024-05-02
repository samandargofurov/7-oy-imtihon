import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import HeadPhones from "./pages/HeadPhones";
import Speakers from "./pages/Speakers";
import EarPhones from "./pages/EarPhones";
import Layout from "./layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [ logged, setLogged ] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const user = localStorage.getItem('users')
    if (user && location.pathname != '/register') {
      setLogged(false);
      navigate('/')
    }
  }, [])
  
  function ProtectedRoute({
    children,
    isAuthentication = logged,
    redirectTo = "/login",
  }) {
    if (!isAuthentication) {
      navigate(redirectTo)
    }

    return children;
  }

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        {/* protected route */}
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthentication={true}>
              <Layout>
                <Home></Home>
              </Layout>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/headphones"
          element={
            <ProtectedRoute isAuthentication={true}>
              <Layout>
                <HeadPhones></HeadPhones>
              </Layout>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/speakers"
          element={
            <ProtectedRoute isAuthentication={true}>
              <Layout>
                <Speakers></Speakers>
              </Layout>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/earphones"
          element={
            <ProtectedRoute isAuthentication={true}>
              <Layout>
                <EarPhones></EarPhones>
              </Layout>
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
