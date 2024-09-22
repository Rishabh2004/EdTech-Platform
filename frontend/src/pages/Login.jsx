import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const response = await axios.post('http"//localhost:8000/accounts/login', { email, password });

            console.log('Login successful:', response.data);

        } catch (error) {
            console.error('Login error:', error.response?.data || error.message);
            setError(error.response?.data?.message || 'An error occurred');
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-customBg text-customText">
            <Navbar />

            {/* Main content area */}
            <div className="flex-grow flex items-center justify-center py-8">
                <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 underline decoration-yellow-500 decoration-4" align="center">
                        Welcome Back
                    </h1>
                    <h2 className="text-2xl font-semibold mb-6 text-custom-light">Log In</h2>

                    {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error message */}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium mb-1 text-custom-light">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-3 py-2 rounded-md border border-custom-light bg-gray-900 text-custom-light placeholder-custom-light"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium mb-1 text-custom-light">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-3 py-2 rounded-md border border-custom-light bg-gray-900 text-custom-light placeholder-custom-light"
                                placeholder="Enter your password"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 rounded-md bg-blue-700 text-custom-light hover:bg-blue-800"
                            disabled={loading} // Disable button while loading
                        >
                            {loading ? 'Logging In...' : 'Log In'}
                        </button>
                    </form>
                </div>
            </div>

            <footer className="py-6 px-4 md:px-6 border-t text-xs text-custom-light">
                &copy; 2024 Edtech Platform. All rights reserved.
            </footer>
        </div>
    );
};

export default Login;
