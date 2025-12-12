import React from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const userName = user?.email?.split('@')[0];
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // clear user context + localStorage
    navigate('/'); // redirect to login page
  };
  return (
    <header className="w-full bg-white shadow-lg py-4 px-6 flex items-center justify-between rounded-b-2xl">
      {/* Left Section */}
      <h1 className="text-2xl font-medium tracking-tight text-neutral-900 flex items-center gap-2">
        Hello {userName} 👋
      </h1>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="py-2 px-5 rounded-full text-sm font-semibold text-white bg-neutral-900 shadow-md shadow-neutral-900/30 
        hover:bg-neutral-800 transition duration-300 ease-in-out focus:outline-none focus:ring-2 
        focus:ring-offset-2 focus:ring-indigo-600"
      >
        Log Out
      </button>
    </header>
  );
};

export default Header;
