import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Home.css';  

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState('');

  // Fetch logged-in user from localStorage
  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  return (
    <div className="home-container">
      
      <motion.div 
        className="home-background" 
        animate={{
          opacity: [0, 0.4, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
      
      
      <div className="home-overlay">

      
      <div className="home-content">
        <h1 className="home-title">
          Welcome {"  "}
          <span style={{
            fontSize: "5rem",
            fontWeight: "bold",
            color: "transparent",
            WebkitTextStroke: "2px black",
            fontFamily: "'Poppins', sans-serif"
          }}> 
            {loggedInUser || 'Guest'}
          </span>
        </h1>
        <p className="home-description">
          Get ready to transform your body with our top-notch workout and exercise programs.
        </p>
      </div>
        
      </div>
    </div>
  );
};

export default Home;
