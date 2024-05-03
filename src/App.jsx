import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import HeadPhones from "./pages/HeadPhones";
import Speakers from "./pages/Speakers";
import EarPhones from "./pages/EarPhones";
import Layout from "./layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Details from "./pages/Details";
import "./App.css";
import Checkout from "./pages/Checkout";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const navigate = useNavigate();
  
  function ProtectedRoute({
    children,
    isAuthentication,
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
        <Route path="/about/:id" element={<ProtectedRoute isAuthentication={true}><Layout><Details></Details></Layout></ProtectedRoute>}/>
        <Route path="/checkout" element={<ProtectedRoute isAuthentication={true}><Layout><Checkout></Checkout></Layout></ProtectedRoute>}/>
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

         <Route
          path="*"
          element={
              <ErrorPage></ErrorPage>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
