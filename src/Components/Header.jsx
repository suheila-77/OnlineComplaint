import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full bg-teal-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-4xl font-bold">Online Complaint System</h1>
          <nav className="space-x-8">
            <Link to="/" className="hover:text-gray-300 text-2xl">Home</Link>
            <Link to="/about" className="hover:text-gray-300 text-2xl">About</Link>
            <Link to="/login" className="hover:text-pink-300 text-2xl shadow-lg p-6 rounded-full">Admin</Link>
          </nav> 
        </div>
      </header>
  );
};

export default Header;
