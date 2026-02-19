import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf, LogOut } from 'lucide-react';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('carbonUser');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className={isLoggedIn ? "bg-gray-900 text-white p-4 shadow-lg" : "bg-transparent text-white p-4 absolute w-full z-10"}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-green-400">
          <Leaf size={24} />
          <span>CarbonTracker</span>
        </Link>

        {isLoggedIn && (
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-green-400 transition">Dashboard</Link>
            <Link to="/eco-lab" className="hover:text-green-400 transition">Eco-Simulator</Link>
            <button onClick={handleLogout} className="flex items-center gap-1 text-gray-400 hover:text-red-400 transition border-l border-gray-700 pl-4 ml-2">
              <LogOut size={18} /> Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;