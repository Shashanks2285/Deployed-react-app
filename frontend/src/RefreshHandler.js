import React, { useEffect } from 'react'
import { use } from 'react'

function RefreshHandler() {

    const location=userLocation();
    const navigate = useNavigate();

    useEffect(() => {   
        if(localStorage.getItem('token')){
            setIsAuthenticated(true);
            if(location.pathname === '/login' || 
                location.pathname === '/signup' ||
                location.pathname === '/'
            ){
                navigate('/home');
            }
        }
        
    },[location, navigate,setIsAuthenticated])
  return (
    null
  )
}

export default RefreshHandler