import React from 'react';
import { Link } from 'react-router-dom';

const AdminLogin = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-teal-500 flex items-center justify-center">
      <div className="bg-gray-800 text-white p-10 rounded-lg shadow-2xl w-full max-w-sm relative">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2  text-gray-400 hover:text-white transition duration-300"
        >
       x
        </button>
        <h2 className="text-4xl font-bold mb-8 text-center">Admin Login</h2>
        
        <input 
          type="text" 
          placeholder="Username" 
          className="bg-gray-700 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-400 transition duration-300"
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          className="bg-gray-700 p-3 mb-6 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-400 transition duration-300"
        />
        <Link to='/dashboard'>
        <button 
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg w-full transition duration-300 shadow-lg"
        >
          Login
        </button>
        </Link>
      </div>
    </div>
  );
};

export default AdminLogin;
