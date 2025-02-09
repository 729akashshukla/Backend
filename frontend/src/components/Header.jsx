
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/products" className="mx-2">Products</Link>
        {isAuthenticated && <Link to="/profile" className="mx-2">Profile</Link>}
      </div>
      <div>
        {isAuthenticated ? (
          <button onClick={() => dispatch(logout())} className="bg-red-500 px-3 py-1 rounded">
            Logout
          </button>
        ) : (
          <Link to="/login" className="bg-blue-500 px-3 py-1 rounded">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
