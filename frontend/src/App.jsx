import  { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./redux/slices/authSlice";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuth()); // Check if user is already authenticated
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/profile" /> : <Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
