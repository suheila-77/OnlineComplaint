import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterForm = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/user/create', {
        username,
        password,
        email,
      });
      if (response.data.error) {
        alert('Registration failed. Please try again.');
      } else {
        alert('Account created successfully');
        navigate('/signin');
        localStorage.setItem('token', response.data.token);
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 p-4">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl font-semibold transition-all"
        >
          &times;
        </button>
        <h2 className="text-4xl font-bold text-center text-teal-500 mb-6">Create Your Account</h2>
        
        <form onSubmit={handleRegister} className="space-y-6">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
          />

          <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200">
            Register
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          Already have an account?{' '}
          <span
            onClick={() => navigate('/signin')}
            className="text-teal-500 cursor-pointer hover:text-teal-600 underline"
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
