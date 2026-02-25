import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaCloudSun } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const getInitial = () => {
    if (!user?.name) return "";
    return user.name.charAt(0).toUpperCase();
  };

  return (
    <div className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-green-100 shadow-sm">
      <div className=" mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-green-400 to-emerald-600 p-3 rounded-xl shadow-md">
            <FaCloudSun className="text-white text-xl" />
          </div>
          <h1 className="text-2xl flex items-start gap-2 font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            Weather AI <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"/>
          </h1>
        </div>

        {/* User Section */}
        <div className="flex items-center gap-4">
          
          {/* User Info */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold shadow-md">
              {getInitial()}
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="px-4 py-2 flex items-center gap-2 cursor-pointer text-white transition hover:bg-green-600 bg-green-500 font-bold rounded-lg shadow-md hover:scale-105 hover:shadow-lg duration-300"
          >
            Logout
            <LuLogOut cl/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;