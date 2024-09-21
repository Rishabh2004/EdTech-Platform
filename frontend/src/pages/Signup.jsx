import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const SignupPage = () => {
  // State variables for form inputs and error messages
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Validate passwords
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true); // Start loading

    try {
      // Send signup request to your backend API
      const response = await axios.post('/api/signup', {
        firstName,
        lastName,
        email,
        phone,
        password,
      });

      // Handle successful signup (e.g., redirect user or show success message)
      console.log('Signup successful:', response.data);
      // Example: window.location.href = '/login'; // Redirect to login page

    } catch (error) {
      // Handle error
      console.error('Signup error:', error.response?.data || error.message);
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
          <h1 className="text-2xl font-semibold mb-6 text-custom-light">Create an Account</h1>
          
          {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error message */}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-sm font-medium mb-1 text-custom-light">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-md border border-custom-light bg-gray-900 text-custom-light placeholder-custom-light"
                placeholder="Enter your first name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="lastName" className="block text-sm font-medium mb-1 text-custom-light">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-md border border-custom-light bg-gray-900 text-custom-light placeholder-custom-light"
                placeholder="Enter your last name"
              />
            </div>

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
              <label htmlFor="phone" className="block text-sm font-medium mb-1 text-custom-light">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-md border border-custom-light bg-gray-900 text-custom-light placeholder-custom-light"
                placeholder="Enter your phone number"
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

            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1 text-custom-light">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-md border border-custom-light bg-gray-900 text-custom-light placeholder-custom-light"
                placeholder="Confirm your password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 rounded-md bg-blue-700 text-custom-light hover:bg-blue-800"
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 px-4 md:px-6 border-t text-xs text-muted-foreground">
        &copy; 2024 Edtech Platform. All rights reserved.
      </footer>
    </div>
  );
};

export default SignupPage;
