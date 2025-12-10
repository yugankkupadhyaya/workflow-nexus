import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-lg py-4 px-6 flex items-center justify-between rounded-b-2xl">
      {/* Left Section */}
      <h1 className="text-2xl font-medium tracking-tight text-neutral-900 flex items-center gap-2">
        Hello User 👋
      </h1>

      {/* Logout Button */}
      <button
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
