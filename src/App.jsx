import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import HeadPhones from "./pages/HeadPhones";
import Speakers from "./pages/Speakers";
import EarPhones from "./pages/EarPhones";
import Layout from "./layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";

function App() {
  const navigate = useNavigate();

  function ProtectedRoute({
    children,
    isAuthentication,
    redirectTo = "/login",
  }) {
    if (!isAuthentication) {
      navigate(redirectTo);
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
            <ProtectedRoute isAuthentication={false}>
              <Layout>
                <Home></Home>
              </Layout>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/headphones"
          element={
            <ProtectedRoute isAuthentication={false}>
              <Layout>
                <HeadPhones></HeadPhones>
              </Layout>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/speakers"
          element={
            <ProtectedRoute isAuthentication={false}>
              <Layout>
                <Speakers></Speakers>
              </Layout>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/earphones"
          element={
            <ProtectedRoute isAuthentication={false}>
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
