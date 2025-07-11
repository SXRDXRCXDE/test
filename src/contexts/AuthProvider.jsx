// src/contexts/AuthProvider.js (As provided previously, with the custom event listener)

import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => localStorage.getItem('access_token'));
    const navigate = useNavigate();

    const login = (accessToken) => {
        setToken(accessToken);
        localStorage.setItem('access_token', accessToken);
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem('access_token');
        navigate('/login', { replace: true });
    };

    const isAuthenticated = !!token;

    useEffect(() => {
        const handleStorageChange = () => {
            const storedToken = localStorage.getItem('access_token');
            if (!storedToken) logout();
        };

        const handleUnauthorizedApiCall = () => {
            console.warn("Unauthorized API call detected, logging out...");
            logout();
        };

        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('unauthorized-api-call', handleUnauthorizedApiCall);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('unauthorized-api-call', handleUnauthorizedApiCall);
        };
    }, []);

    return (
        <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);