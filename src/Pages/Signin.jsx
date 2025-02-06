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
        <div className="fixed inset-0 bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center p-4">
            <div className="bg-gray-900 text-white p-8 rounded-lg shadow-2xl w-full max-w-sm relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl">&times;</button>
                <h2 className="text-3xl font-bold mb-6 text-center">Signin to make a complaint</h2>
                
                <form onSubmit={handleRegister} className="space-y-4">
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        className="bg-gray-700 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                   
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="bg-gray-700 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                    
                    <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg w-full transition duration-300">
                      Login
                      
                    </button>
                  
                </form>

               
            </div>
        </div>
    );
};

export default Signin;
