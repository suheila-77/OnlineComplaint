import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = ({ onClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/admin/login', { username, password });
            if (response.data.error) {
                alert('Username or password incorrect');
            } else {
                alert('Login successfully');
                localStorage.setItem('token', response.data.token);
                navigate('/dashboard');
            }
        } catch (error) {
            console.error(error);
            alert('Login failed');
        }
    };

    return (
        <div className="fixed inset-0 bg-teal-500 flex items-center justify-center">
            <div className="bg-gray-800 text-white p-10 rounded-lg shadow-2xl w-full max-w-sm relative">
                <form onSubmit={handleLogin}>
                    <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-white">x</button>
                    <h2 className="text-4xl font-bold mb-8 text-center">Admin Login</h2>
                    
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="bg-gray-700 p-3 mb-4 w-full rounded-lg"/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-700 p-3 mb-6 w-full rounded-lg"/>
                    
                    <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg w-full">Login</button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
