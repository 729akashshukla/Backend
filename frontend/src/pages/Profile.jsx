
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) return <p className="text-center mt-10">Loading profile...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Your Profile</h2>
      <div className="mt-4 border p-4 rounded-lg shadow-md">
        <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>
    </div>
  );
};

export default Profile;
