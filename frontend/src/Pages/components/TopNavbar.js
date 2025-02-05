
// import React from 'react';
// import { handleSuccess } from '../../utils'; 
// import { useNavigate } from 'react-router-dom';


// function TopNavbar() {
//   const navigate = useNavigate();
//   // const [loggedInUser, setLoggedInUser] = useState('');
//   const navigateTo = (path) => {
//     navigate(path); // Use navigate instead of window.location.href
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('loggedInUser');
//     handleSuccess('User Logged out');
//     setTimeout(() => {
//       navigate('/login');
//     }, 1000);
//   };

//   return (
//     // <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
//     //   <button onClick={() => navigateTo('/excercise')}>Workout</button>
//     //   <button onClick={() => navigateTo('/todo')}>Todo</button>
//     //   <button onClick={() => navigateTo('/about')}>About</button>
//     //   <button onClick={handleLogout}>Logout</button>
//     // </div>
//     <h1>Navbar</h1>
//   );
// }

// export default TopNavbar;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Stack, Button } from '@mui/material';
import Logo from '../../assets/images/Logo.png';
import { handleSuccess } from '../../utils';

const TopNavbar = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path); // Navigate to the specified path
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Logged out');
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        position: 'sticky', 
        // top: 0, 
        zIndex: 10, 
        gap: { sm: '50px', xs: '20px' },
        p: '10px',
        backgroundColor: '#fff',
        boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
        borderRadius:'15px',
        marginTop :'25px',
        padding: '10px',
      }}
    >
      {/* Logo */}
      <Link to="/home">
        <img src={Logo} alt="logo" style={{ width: '34px', height: '34px' }} />
      </Link>

      {/* Navigation Links */}
      <Stack direction="row" gap="20px" alignItems="center">
        <Button
          variant="text"
          onClick={() => navigateTo('/excercise')}
          sx={{ textTransform: 'none', fontSize: '16px', color: '#c00' }}
        >
          Workout
        </Button>
        <Button
          variant="text"
          onClick={() => navigateTo('/todo')}
          sx={{ textTransform: 'none', fontSize: '16px', color: '#c00' }}
        >
          Todo
        </Button>
        <Button
          variant="text"
          onClick={() => navigateTo('/about')}
          sx={{ textTransform: 'none', fontSize: '16px', color: '#c00' }}
        >
          About
        </Button>
        <Button
          variant="outlined"
          onClick={handleLogout}
          sx={{
            textTransform: 'none',
            fontSize: '16px',
            borderColor: '#FF2625',
            color: '#FF2625',
            '&:hover': {
              backgroundColor: '#FF2625',
              color: '#fff',
            },
            borderRadius: '11px',
          }}
        >
          Logout
        </Button>
      </Stack>
    </Stack>
  );
};

export default TopNavbar;
