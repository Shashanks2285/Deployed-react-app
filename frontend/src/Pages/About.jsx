import React, { useEffect, useState } from "react";
import {  Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Inject CSS styles
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
      :root {
        --primary-color: #d32f2f; /* Red */
        --secondary-color: #ffffff; /* White */
        --text-color: #212121; /* Dark text */
        --hover-color: #ff6659; /* Lighter red for hover */
      }

      .about-container {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        padding: 2rem;
        background-color: var(--secondary-color);
        min-height: 100vh;
        box-sizing: border-box;
        color: var(--text-color);
      }

      .section {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 2rem;
        margin: 1rem 0;
      }

      .section.reverse {
        flex-direction: row-reverse;
      }

      .section-content {
        flex: 1;
        padding: 1rem;
      }

      .section-image {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .section-image img {
        max-width: 100%;
        height: auto;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      .section-title {
        font-size: 1.8rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: var(--primary-color);
      }

      .section-description {
        font-size: 1rem;
        line-height: 1.6;
      }

      .tech-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
      }

      .tech-item {
        background-color: var(--primary-color);
        color: var(--secondary-color);
        padding: 1rem;
        border-radius: 0.5rem;
        text-align: center;
        font-weight: bold;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, background-color 0.3s ease;
      }

      .tech-item:hover {
        transform: scale(1.1);
        background-color: var(--hover-color);
        cursor: pointer;
      }

      .contact-icons {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-top: 1rem;
      }

      .contact-icon {
        font-size: 2rem;
        color: var(--primary-color);
        transition: transform 0.3s ease, color 0.3s ease;
      }

      .contact-icon:hover {
        transform: scale(1.2);
        color: var(--hover-color);
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      {/* Section 1: About Functionalities */}
      <div className="section">
        <div className="section-content">
          <h2 className="section-title">Functionalities</h2>
          <p className="section-description">
            This application is designed to provide a seamless user experience by integrating features such as:
            <ul>
              <li>A usefull exercise recomendation using RapidAPI</li>
              <li>A feature-rich to-do list powered by Gemini</li>
              <li>User authentication and management with MongoDB</li>
              <li>Responsive design with Bootstrap and custom styles</li>
            </ul>
          </p>
        </div>
        <div className="section-image">
          <img src="https://via.placeholder.com/400" alt="Functionalities" />
        </div>
      </div>

      {/* Section 2: Technology Used */}
      <div className="section reverse">
        <div className="section-content">
          <h2 className="section-title">Technology Used</h2>
          <div className="tech-grid">
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="tech-item">
              React
            </a>
            <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer" className="tech-item">
              MongoDB
            </a>
            <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer" className="tech-item">
              Bootstrap
            </a>
            <a href="https://rapidapi.com/" target="_blank" rel="noopener noreferrer" className="tech-item">
              RapidAPI
            </a>
            <a href="https://ai.google.dev/" target="_blank" rel="noopener noreferrer" className="tech-item">
              Gemini
            </a>
            <a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer" className="tech-item">
              Framer Motion
            </a>
            <a href="https://lucide.dev/" target="_blank" rel="noopener noreferrer" className="tech-item">
              Lucide Icons
            </a>
            <a href="https://shadcn.dev/" target="_blank" rel="noopener noreferrer" className="tech-item">
              Shadcn UI
            </a>
          </div>
        </div>
        <div className="section-image">
          <img src="https://via.placeholder.com/400" alt="Technologies" />
        </div>
      </div>

      {/* Section 3: Info and Contact */}
      <div className="section">
        <div className="section-content">
          <h2 className="section-title">Info and Contact</h2>
          <p className="section-description">
            If you’d like to connect with the developer or learn more about this project, feel free to reach out!
          </p>
          <div className="contact-icons">
            <a href="mailto:shashankshekharlkrmit1@gmail.com" className="contact-icon" aria-label="Email">
              <Mail />
            </a>
            <a href="https://github.com/Shashanks2285" className="contact-icon" aria-label="GitHub">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/shashank-shekhar-013388235/" className="contact-icon" aria-label="LinkedIn">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
