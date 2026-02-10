import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-xl font-semibold text-blue-600">
          PrimeTrade
        </h1>

        {user && (
            <span className="text-sm text-gray-600">
              Hi, <span className="text-lg font-bold">{user.name}</span>
            </span>
          )}

        {/* Right section */}
        <div className="flex items-center gap-4 justify-between">
          

          <button
            onClick={handleLogout}
            className="hover:cursor-pointer text-md text-red-500 hover:text-red-600 font-medium transition"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
