
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [currentUser, setCurrentUser] = useState(null); //Added Now
    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
        const user = localStorage.getItem('user');

        if (token && user) {
            setIsAuthenticated(true);
            setCurrentUser(JSON.parse(user)); // Parse the user JSON string
        } else {
            setIsAuthenticated(false);
            setCurrentUser(null);
        }
    }, []);

    const login = (data) => {
        localStorage.setItem('token', data.token); 
        localStorage.setItem('user', JSON.stringify(data.user));// Assuming 'data.token' is your auth token
        setIsAuthenticated(true);
        setCurrentUser(data.user);
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');//Added now
        setIsAuthenticated(false);
        setCurrentUser(null); //added now
    };

    const value = { isAuthenticated,    currentUser,    login, logout };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);


