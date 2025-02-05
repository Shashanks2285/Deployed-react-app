import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function RefreshHandler({ setIsAuthenticated }) {  // Receive it as a prop
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {   
        if (localStorage.getItem('token')) {
            setIsAuthenticated(true);  // Now it has access to the function
            if (
                location.pathname === '/login' || 
                location.pathname === '/signup' ||
                location.pathname === '/'
            ) {
                navigate('/home');
            }
        }
    }, [location, navigate, setIsAuthenticated]);  // Add setIsAuthenticated to dependency array

    return null;
}

export default RefreshHandler;
