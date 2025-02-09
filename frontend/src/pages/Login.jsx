import  { useState } from "react";
import { useDispatch } from "react-redux";
import { checkAuth } from "../redux/slices/authSlice";
import { login } from "../services/auth";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password });
    dispatch(checkAuth()); // Refresh auth state
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <input className="border p-2 w-full mb-4" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="border p-2 w-full mb-4" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-blue-500 text-white px-4 py-2 w-full rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
