import React from 'react';
import { Navigate } from 'react-router-dom';

// This is a sample authentication check. Replace it with your actual auth logic.
const isAuthenticated = () => {
    // For example, you could check if a token is in localStorage or a global auth state
    return localStorage.getItem('jwt') !== null;
};

const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
        // If the user is not authenticated, redirect them to the login page
        return <Navigate to="/login" />;
    }

    // If the user is authenticated, allow access to the route
    return children;
};

export default ProtectedRoute;
