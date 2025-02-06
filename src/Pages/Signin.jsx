import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin = ({ onClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/user/login', { username, password });
            if (response.data.error) {
                alert('Username or password incorrect');
            } else {
                alert('Login successfully');
                localStorage.setItem('token', response.data.token);
                navigate('/register');
            }
        } catch (error) {
            console.error(error);
            navigate('/register');
            alert('Login failed');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-teal-500 to-blue-600 p-4">
            <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-sm relative">
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-semibold transition-all"
                >
                    &times;
                </button>

                <h2 className="text-4xl font-extrabold text-center text-teal-600 mb-8">
                    Sign In to Make a Complaint
                </h2>

                <form onSubmit={handleRegister} className="space-y-6">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
                    />
                    
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
                    />

                    <button 
                        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 rounded-lg transition-all duration-300"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-gray-500 mt-6">
                    Don't have an account? 
                    <span
                        onClick={() => navigate('/register')}
                        className="text-teal-600 cursor-pointer hover:text-teal-700 font-semibold"
                    >
                        Register Now
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Signin;
