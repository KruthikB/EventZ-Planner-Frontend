// src/components/ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
  
    if (isAuthenticated === null) {
      // If authentication is still being determined, you can return null or a loading spinner
      return <div>Loading...</div>; // Or your loading component
    }
  
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

export default ProtectedRoute;
