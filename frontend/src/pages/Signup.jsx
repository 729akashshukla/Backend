import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../services/auth"; 
import { checkAuth } from "../redux/slices/authSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    avatar: null,
    coverImage: null, 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        formDataObj.append(key, formData[key]);
      }
    });

    try {
      await signup(formDataObj);
      dispatch(checkAuth()); // Refresh session after signup
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Signup</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input type="text" name="fullName" placeholder="Full Name" className="input-field" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" className="input-field" onChange={handleChange} required />
          <input type="text" name="username" placeholder="Username" className="input-field" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" className="input-field" onChange={handleChange} required />
          
          <label className="text-sm font-medium mb-1">Avatar</label>
          <input type="file" name="avatar" accept="image/*" className="mb-4" onChange={handleFileChange} required />

          <label className="text-sm font-medium mb-1">Cover Image</label>
          <input type="file" name="coverImage" accept="image/*" className="mb-4" onChange={handleFileChange} />

          <button type="submit" className="btn-primary">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
