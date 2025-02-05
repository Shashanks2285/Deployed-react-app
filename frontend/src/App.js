
import { Box } from '@mui/material';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LoginSignup from './Pages/LoginSignup';
import Excercise from './Pages/Excercise';
import ExerciseDetail from './Pages/ExerciseDetail';
import Todo from './Pages/Todo';
import About from './Pages/About';
import TopNavbar from './Pages/components/TopNavbar';
import Footer from './Pages/components/Footer';
import Chat from './chatbot_components/AiChat';
import RefreshHandler from './RefreshHandler';

function App() {
  const location = useLocation();
  const noHeaderFooterPaths = ['/', '/login', '/signup'];
  const showHeaderFooter = !noHeaderFooterPaths.includes(location.pathname);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  }


  return (
    <>
      <Box
        sx={{
          minwidth: '100%' ,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', 
          justifyContent: 'space-between', 
          // mar: '5px',
          margin: '0 auto',
          border: '0 auto',
        }}
      >
        {showHeaderFooter && <TopNavbar />}
        <RefreshHandler setIsAuthenticated={setIsAuthenticated}/>
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/signup" element={<Navigate to="/login" />} />
          <Route path="/home" element={<PrivateRoute element={<Home/>}/>} />
          <Route path="/excercise" element={<Excercise />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
        {showHeaderFooter && <Footer />}
        
      </Box>
      <Chat/>
    </>
  );
}

export default App;
