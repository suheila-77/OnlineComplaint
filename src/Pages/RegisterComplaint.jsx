import React, { useState } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

const RegisterComplaint = () => {
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [email, setEmail] = useState('');

  const handleRegisterComplaint = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/api/complaint', { email, Title, Description })
      .then(() => {
        toast.success('Complaint registered successfully');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 bg-opacity-90 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-full max-w-xl transition-transform duration-300 transform hover:scale-105">
        <h2 className="text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600">
          Register Complaint
        </h2>
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="border border-gray-300 p-4 mb-5 w-full rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-300 text-gray-800 placeholder-gray-500 shadow-md transition-all duration-200"
        />
        <input
          type="text"
          placeholder="Enter your complaint title"
          value={Title}
          onChange={(event) => setTitle(event.target.value)}
          className="border border-gray-300 p-4 mb-5 w-full rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-300 text-gray-800 placeholder-gray-500 shadow-md transition-all duration-200"
        />
        <textarea
          placeholder="Describe your complaint in detail..."
          value={Description}
          onChange={(event) => setDescription(event.target.value)}
          className="border border-gray-300 p-4 mb-8 w-full rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-300 text-gray-800 placeholder-gray-500 shadow-md h-40 resize-none transition-all duration-200"
        ></textarea>
        <button
          onClick={handleRegisterComplaint}
          className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-2xl w-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
        >
          Submit Complaint
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default RegisterComplaint;
